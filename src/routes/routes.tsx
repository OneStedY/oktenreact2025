// Імпортуємо функцію для створення роутера, який працює через history API браузера
import {createBrowserRouter} from "react-router-dom";
// Імпортуємо головний лейаут, в якому буде спільна частина (меню + Outlet)
import {MainLayout} from "../layouts/MainLayout.tsx";
// Імпортуємо сторінку домашньої (головної) сторінки
import {HomePage} from "../pages/HomePage.tsx";
// Імпортуємо сторінку логіну
import {LoginPage} from "../pages/LoginPage.tsx";
// Імпортуємо сторінку з "захищеними" ресурсами
import {AuthResourcesPage} from "../pages/AuthResourcesPage.tsx";

// Створюємо роутер і експортуємо його, щоб використати в main.tsx
export const routes = createBrowserRouter([
    {
        // Базовий шлях застосунку
        path: '/',
        // При будь-якому шляху, який підпадає під цей об'єкт, рендеримо MainLayout
        element: <MainLayout/>,
        // Вкладені маршрути, які будуть рендеритися всередині <Outlet/> лейауту
        children: [
            {
                // index: true означає "кореневий" дочірній маршрут, тобто шлях '/'
                index: true,
                // Який саме компонент рендерити для цього маршруту
                element: <HomePage/>
            },
            {
                // Відносний шлях 'login' (повний шлях буде '/login')
                path: 'login',
                // Компонент сторінки логіну
                element: <LoginPage/>
            },
            {
                // Абсолютний шлях '/auth/resources' до сторінки з ресурсами
                path: '/auth/resources',
                // Компонент, який показує "захищені" дані (ті, що вимагають токен)
                element: <AuthResourcesPage/>
            },
        ]
    }
]);