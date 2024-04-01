import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface Product {
    id: number,
    title: string,
    description: string,
    price: number;
    image: string;
}

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(res=>res.json())
            .then((json: Product[]) =>setProducts(json))
    }, []);

    return (
        <>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}

export default ProductList;