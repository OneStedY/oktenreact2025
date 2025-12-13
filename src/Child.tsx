import React from "react";

type ChildProps = {
    title: string;
};

function Child({ title }: ChildProps) {
    console.log("Child render"); // має ререндеритись тільки при зміні title
    return <div>Child title: {title}</div>;
}

export default React.memo(Child); // пропси ті самі -> пропускаємо ререндер
