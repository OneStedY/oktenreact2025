// Інтерфейс для об'єкта з парою токенів, який приходить від бекенда
export interface ITokenPair {
    // Новий access токен
    accessToken: string;
    // Новий refresh токен
    refreshToken: string;
}