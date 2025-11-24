// Описуємо інтерфейс користувача, якого повертає dummyjson при успішному логіні
export interface IUserWithTokens {
    // Унікальний ідентифікатор користувача
    id: number;
    // Логін (нікнейм)
    username: string;
    // Email користувача
    email: string;
    // Ім'я
    firstName: string;
    // Прізвище
    lastName: string;
    // Стать (як приходить із бекенда)
    gender: string;
    // URL до зображення (аватарки) користувача
    image: string;
    // Access токен (короткоживучий токен для доступу до захищених ресурсів)
    accessToken: string;
    // Refresh токен (довгоживучий токен для оновлення access токена)
    refreshToken: string;
}