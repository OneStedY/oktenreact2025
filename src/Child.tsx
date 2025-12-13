import React from "react";

type ChildProps = {
    onIncrement: () => void; // колбек з батька
};

function Child({ onIncrement }: ChildProps) {
    console.log("Child render"); // перевірка зайвих ререндерів
    return <button onClick={onIncrement}>Increment</button>;
}

export default React.memo(Child); // ререндер лише якщо пропси змінились (поверхнево)
