// Описуємо інтерфейс для розмірів продукту
export interface IDimensions {
    // Ширина товару
    width: number;
    // Висота товару
    height: number;
    // Глибина товару
    depth: number;
}

// Описуємо інтерфейс для одного відгуку про продукт
export interface IReviews {
    // Оцінка товару за відгуком
    rating: number;
    // Текстовий коментар від користувача
    comment: string;
    // Дата створення відгуку
    date: string;
    // Ім'я автора відгуку
    reviewerName: string;
    // Email автора відгуку
    reviewerEmail: string;
}

// Описуємо додаткову службову інформацію про продукт
export interface IMeta {
    // Дата створення запису про продукт
    createdAt: string;
    // Дата останнього оновлення запису
    updatedAt: string;
    // Штрихкод товару
    barcode: string;
    // QR-код товару
    qrCode: string;
}

// Головний інтерфейс, який описує один продукт, що приходить з dummyjson
export interface IProduct {
    // Унікальний ідентифікатор продукту
    id: number;
    // Назва продукту
    title: string;
    // Опис продукту
    description: string;
    // Категорія, до якої належить продукт
    category: string;
    // Ціна продукту
    price: number;
    // Відсоток знижки
    discountPercentage: number;
    // Середній рейтинг продукту
    rating: number;
    // Кількість одиниць товару на складі
    stock: number;
    // Мітки / теги продукту
    tags: string[];
    // Бренд продукту
    brand: string;
    // SKU (складський артикул)
    sku: string;
    // Вага продукту
    weight: number;
    // Вкладений об'єкт з розмірами товару
    dimensions: IDimensions;
    // Інформація про гарантію
    warrantyInformation: string;
    // Інформація про доставку
    shippingInformation: string;
    // Масив відгуків про продукт
    reviews: IReviews[];
    // Додаткова службова інформація (метадані)
    meta: IMeta;
}