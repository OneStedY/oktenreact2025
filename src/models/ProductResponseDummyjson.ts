import type {ProductModel} from "./ProductModel.ts";

export interface ProductsResponseDummyjson {
    products: ProductModel[];
    total: number;
    skip: number;
    limit: number;
}