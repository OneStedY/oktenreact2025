// Outlet — спеціальний компонент react-router, куди буде підставлятися активна сторінка
import {Outlet} from "react-router-dom";
// Імпортуємо компонент меню, який буде відображатися завжди
import Menu from "../components/menu/Menu.tsx";

// Головний лейаут застосунку
export const MainLayout = () => {
    return (
        <>
            {/* Верхня частина — меню навігації */}
            <Menu/>
            {/* Тут буде рендеритися активний дочірній маршрут (HomePage, LoginPage, AuthResourcesPage) */}
            <Outlet/>
        </>
    );
};