// Імпортуємо інтерфейс продукту, який описує один елемент масиву products
import {IProduct} from "./IProduct.ts";

// Тип для відповіді бекенда при запиті списку продуктів
export type IProductsResponseModelType = {
    // Загальна кількість продуктів
    total: number;
    // Скільки елементів пропущено (для пагінації)
    skip: number;
    // Максимальна кількість елементів у відповіді
    limit: number;
    // Масив самих продуктів
    products: IProduct[];
};