import React, {useEffect, useState} from "react";
import {IImageItem, IProductItem} from "./types.ts";
import {APP_ENV} from "../../../env";
import {ColumnsType} from "antd/es/table";
import {ICategoryItem} from "../../categories/list/types.ts";
import http_common from "../../../http_common.ts";
import {Table} from "antd";

const ProductsListPage: React.FC = () => {
    const [list, setList] = useState<IProductItem[]>();
    const imagePath = `${APP_ENV.BASE_URL}/upload/150_`;

    const columns : ColumnsType<IProductItem> = [
        {
            title: '#',
            dataIndex: 'id'
        },
        {
            title: 'Назва',
            dataIndex: 'name'
        },
        {
            title: 'Ціна',
            dataIndex: 'price'
        },
        {
            title: 'Кількість',
            dataIndex: 'quantity'
        },
        {
            title: 'Фото',
            dataIndex: 'product_images',
            render: (images: IImageItem[] | null) =>
                images?.map(image =>
                    <img src={`${imagePath}${image.name}`} alt="фото" style={{margin: 10}}/>),
        },
        {
            title: 'Категорія',
            dataIndex: 'category',
            render: (category: ICategoryItem | null) => category?.name,
        }
    ];

    useEffect(() => {
        (async () => {
            const response = await http_common.get("/api/products");
            setList(response.data);
        })();
    }, []);

    return (
        <>
            <h1>Список продуктів</h1>
            <Table columns={columns} rowKey={"id"} dataSource={list} size={"middle"}/>
        </>
    );
}

export default ProductsListPage;
