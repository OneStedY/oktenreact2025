import { useMemo, useState } from "react";

function slowSum(n: number) {
  console.log("slowSum running..."); // має запускатись тільки при зміні n
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return sum;
}

export default function App() {
  const [n, setN] = useState(100000);
  const [text, setText] = useState("");

  const result = useMemo(() => {
    // кешуємо результат; перерахунок тільки коли змінився n
    return slowSum(n);
  }, [n]);

  // Без useMemo обчислення піде на кожен ререндер, навіть якщо змінюється лише text.
  // const result = slowSum(n);

  return (
      <div style={{ display: "grid", gap: 12, padding: 16 }}>
        <input
            type="number"
            value={n}
            onChange={(e) => setN(Number(e.target.value))}
        />

        <div>Sum 1..N = {result}</div>

        <input
            value={text}
            onChange={(e) => setText(e.target.value)} // ререндер є, але slowSum не має запускатись
            placeholder="Typing should not recompute"
        />
      </div>
  );
}
