import {ICategoryItem} from "../../categories/list/types.ts";

export interface IProductItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    product_images: IImageItem[] | null;
    category_id: ICategoryItem | null;
}

export interface IImageItem {
    name: string;
    product_id: number;
}
