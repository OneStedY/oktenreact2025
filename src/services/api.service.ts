// У цьому файлі зібрана вся логіка роботи з API авторизації
import axios from 'axios';
// Інтерфейс користувача разом з токенами, який повертає бекенд
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
// Інтерфейс одного продукту (для типізації результату)
import {IProduct} from "../models/IProduct.ts";
// Тип для відповіді з продуктами (total, skip, limit, products)
import {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";
// Хелпер для діставання даних із localStorage
import {retriveLocalStorage} from "./helpers.ts";
// Інтерфейс для пари токенів (access + refresh)
import {ITokenPair} from "../models/ITokenPair.ts";

// Тип даних, які ми відправляємо на бекенд при логіні
type LoginData = {
    username: string;
    password: string;
    // Час життя access токена в хвилинах
    expiresInMins: number;
};

// Створюємо інстанс axios із базовим URL для авторизаційних запитів
const axiosInstance = axios.create({
    // Усі запити через цей інстанс будуть починатися з цього baseURL
    baseURL: 'https://dummyjson.com/auth',
    // Початковий об'єкт заголовків (ми будемо додавати Authorization динамічно)
    headers: {}
});

// Допоміжна функція, яка формує заголовок Authorization на основі токена з localStorage
const getAuthHeaders = () => {
    // Дістаємо з localStorage збереженого користувача з токенами
    const user = retriveLocalStorage<IUserWithTokens>('user');

    // Якщо користувача або токена немає — повертаємо порожні заголовки
    if (!user || !user.accessToken) {
        return {};
    }

    // Якщо токен є — повертаємо об'єкт із заголовком Authorization
    return {
        Authorization: `Bearer ${user.accessToken}`
    };
};

// Функція для логіну користувача
export const login = async (loginData: LoginData): Promise<IUserWithTokens> => {
    // Надсилаємо POST-запит на '/login' з даними користувача
    const {data} = await axiosInstance.post<IUserWithTokens>('/login', loginData);

    // Зберігаємо отриманого користувача з токенами у localStorage під ключем 'user'
    localStorage.setItem('user', JSON.stringify(data));

    // Повертаємо ці дані, щоб за потреби можна було з ними ще щось зробити у компоненті
    return data;
};

// Функція для завантаження "захищеного" списку продуктів
export const loadAuthProducts = async (): Promise<IProduct[]> => {
    // Робимо GET-запит на '/products' і передаємо заголовки з токеном
    const {data} = await axiosInstance.get<IProductsResponseModelType>('/products', {
        headers: getAuthHeaders()
    });

    // Повертаємо з відповіді масив продуктів
    return data.products;
};

// Функція для оновлення токенів (refresh token flow)
export const refresh = async () => {
    // Беремо з localStorage поточні токени користувача
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');

    // Відправляємо POST-запит на '/refresh', передаючи refreshToken
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        // Поточний refresh токен
        refreshToken: iUserWithTokens.refreshToken,
        // На скільки хвилин видавати новий access токен
        expiresInMin: 1
    });

    // Оновлюємо токени в об'єкті користувача
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;

    // Перезаписуємо оновлені дані користувача в localStorage
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));
};