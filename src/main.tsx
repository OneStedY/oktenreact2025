// Імпортуємо функцію createRoot з ReactDOM, щоб "прикріпити" React до DOM-дерева браузера
import {createRoot} from 'react-dom/client'
// Підключаємо глобальні стилі для всього застосунку
import './index.css'
// Імпортуємо RouterProvider — компонент, який "вмикає" маршрутизацію (react-router)
import {RouterProvider} from "react-router-dom";
// Імпортуємо сконфігурований роутер з окремого файлу
import {routes} from "./routes/routes.tsx";

// Знаходимо у DOM елемент з id="root", створюємо для нього React-корінь
// і рендеримо в нього RouterProvider з нашим роутером
createRoot(document.getElementById('root')!).render(<RouterProvider router={routes}/>);