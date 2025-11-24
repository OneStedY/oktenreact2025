// Імпортуємо useEffect — хук, який дозволяє виконати побічні ефекти (запити, логіку) при маунті компонента
import {useEffect} from "react";
// Імпортуємо функцію login із сервісу роботи з API
import {login} from "../services/api.service.ts";

// Компонент сторінки логіну
export const LoginPage = () => {
    // Виконуємо логін один раз при першому рендері компонента
    useEffect(() => {
        // Викликаємо login з "хардкодними" (навчальними) даними користувача
        login({
            username: 'emilys',
            password: 'emilyspass',
            // Час життя access токена в хвилинах (на dummyjson)
            expiresInMins: 1
        });
        // Порожній масив залежностей означає: виконати ефект лише один раз (аналог componentDidMount)
    }, []);

    return (
        <>
            {/* Простий текст, щоб бачити, що ми на сторінці логіну */}
            login Page
        </>
    );
};