// Базовий компонент App, який залишився з шаблону Vite
// У цьому проєкті ми фактично не використовуємо його напряму,
// тому що в main.tsx рендеримо RouterProvider замість <App/>.
import './App.css';

function App() {
    return (
        <>
            {/* Тут міг би бути ваш UI, але для уроку з маршрутизації ми використовуємо RouterProvider у main.tsx */}
        </>
    );
}

export default App;