import { useState } from "react";
import Child from "./Child";

export default function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Hello");

  console.log("App render");

  return (
      <div style={{ display: "grid", gap: 12, padding: 16 }}>
        <button onClick={() => setCount((c) => c + 1)}>
          Increase count: {count}
        </button>

        <input value={title} onChange={(e) => setTitle(e.target.value)} />

        <Child title={title} />
      </div>
  );
}
