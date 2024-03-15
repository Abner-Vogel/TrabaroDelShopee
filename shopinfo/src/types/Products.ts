import { ReactNode } from "react";

export interface ProductDTO {
    quantity: ReactNode;
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export interface ICartItem {
    product: ProductDTO;
    quantity: number;
}
