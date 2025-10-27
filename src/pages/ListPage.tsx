import { useEffect, useState } from "react";

type Props = { url: string; pick?: "users" | "posts" | "comments" };

export const ListPage = ({ url, pick }: Props) => {
    const [items, setItems] = useState<[]>([]);
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const arr = pick ? (data as any)[pick] : (data as any);
                setItems(arr);
            });
    }, [url, pick]);

    return (
        <div>
            {items.map((item, index) => (
                <pre key={index}>{JSON.stringify(item, null, 2)}</pre>
            ))}
        </div>
    );
};