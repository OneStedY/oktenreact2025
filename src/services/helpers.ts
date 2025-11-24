// Допоміжна функція для діставання й парсингу даних з localStorage
// <T> — це generic: функція може повертати дані будь-якого типу, який ми їй підкажемо
export const retriveLocalStorage = <T>(key: string) => {
    // Пробуємо отримати рядок із localStorage за переданим ключем
    // Якщо там null, підставимо порожній рядок
    const object = localStorage.getItem(key) || '';
    // Якщо значення порожнє (немає нічого збереженого) — повертаємо порожній об'єкт потрібного типу
    if (!object) {
        return {} as T;
    }
    // Якщо значення є — парсимо JSON-рядок у звичайний JS-об'єкт
    const parse = JSON.parse(object);
    // Повертаємо цей об'єкт, "підказуючи" TypeScript, що це саме тип T
    return parse as T;
};