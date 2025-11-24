// useEffect потрібен для виконання запиту при завантаженні сторінки
import {useEffect} from "react";
// Імпортуємо дві функції: для завантаження захищених продуктів і для оновлення токенів
import {loadAuthProducts, refresh} from "../services/api.service.ts";

// Компонент сторінки, яка працює із захищеними ресурсами (продуктами)
export const AuthResourcesPage = () => {

    // При монтуванні компонента робимо запит на захищений ресурс
    useEffect(() => {
        // Спочатку пробуємо завантажити продукти з поточним access токеном
        loadAuthProducts()
            .then(products => {
                // Якщо все добре — виводимо масив продуктів у консоль
                console.log(products);
            })
            .catch(reason => {
                // Якщо сталася помилка (наприклад, 401 — токен протермінувався), потрапляємо в catch
                console.log(reason);
                // Пробуємо оновити токени за допомогою refresh()
                refresh()
                    // Коли токени успішно оновлені, повторно викликаємо loadAuthProducts
                    .then(() => loadAuthProducts())
                    // І знову логіном результат у консоль
                    .then(value => console.log(value));
            });

    }, []);

    return (
        <>
            {/* Просто текстова заглушка, щоб бачити, що ми на цій сторінці */}
            AuthResourcesPage
        </>
    );
};