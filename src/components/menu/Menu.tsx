// Імпортуємо Link з react-router-dom для навігації без перезавантаження сторінки
import {Link} from "react-router-dom";

// Простіше меню з трьома посиланнями
const Menu = () => {
    return (
        <div>
            <ul>
                {/* Посилання на головну сторінку '/' */}
                <li><Link to={'/'}>home</Link></li>
                {/* Посилання на сторінку логіну '/login' */}
                <li><Link to={'/login'}>login</Link></li>
                {/* Посилання на сторінку з ресурсами '/auth/resources' */}
                <li><Link to={'/auth/resources'}>resources</Link></li>
            </ul>
            {/* Горизонтальна лінія для відділення меню від контенту */}
            <hr/>

        </div>
    );
};

// Експортуємо компонент за замовчуванням
export default Menu;