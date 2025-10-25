import { useEffect, useState, type FC } from "react";
import type { ProductModel } from "../../models/ProductModel.ts";
import { Product } from "../product-component/Product.tsx";

type ProductsResponse = { products: ProductModel[] };

const endpoint = import.meta.env.VITE_API_BASE_URL + "/products";

export const Products: FC = () => {
    const [items, setItems] = useState<ProductModel[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(endpoint);
            const data: ProductsResponse = await res.json();
            setItems(data.products);
        })();
    }, []);

    return (
        <section>
            {items.map((p) => (
                <Product key={p.id} product={p} />
            ))}
        </section>
    );
};