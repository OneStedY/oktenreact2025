import { useCallback, useState } from "react";
import Child from "./Child";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleIncrement = useCallback(() => {
    // стабільне посилання на функцію, щоб memo-дитина не ререндерилась від тексту
    setCount((c) => c + 1); // функціональне оновлення, без залежності від замикання
  }, []); // функція не змінюється між рендерами

  // Якщо зробити звичайну функцію — вона нова на кожен ререндер і ламає memo.
  // const handleIncrement = () => setCount((c) => c + 1);

  console.log("App render");

  return (
      <div style={{ display: "grid", gap: 12, padding: 16 }}>
        <div>Count: {count}</div>

        <input
            value={text}
            onChange={(e) => setText(e.target.value)} // ререндерить App, але не має чіпати Child
            placeholder="Type to re-render App"
        />

        <Child onIncrement={handleIncrement} />
      </div>
  );
}
