import type { FC } from "react";
import type { ProductModel } from "../../models/ProductModel.ts";

type ProductProps = { product: ProductModel };

export const Product: FC<ProductProps> = ({ product }) => {
    const {
        title = "Untitled",
        description = "",
        price = 0,
        discountPercentage = 0,
        rating = 0,
        stock = 0,
        brand = "—",
        category = "—",
    } = product;

    const finalPrice = +(price * (1 - discountPercentage / 100)).toFixed(2);

    return (
        <article>
            <header>
                <h3>{title}</h3>
                <small>{brand} • {category}</small>
            </header>

            <p>{description}</p>

            <ul>
                <li><b>Price:</b> ${price}</li>
                <li><b>Discount:</b> {discountPercentage}%</li>
                <li><b>Final:</b> ${finalPrice}</li>
                <li><b>Rating:</b> {rating}</li>
                <li><b>Stock:</b> {stock}</li>
            </ul>
        </article>
    );
};