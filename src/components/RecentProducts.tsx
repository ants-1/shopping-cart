import ProductList from "./ProductList";

function RecentProducts() {
    return (
        <div className="flex flex-col items-center mb-10">
            <h3 className="text-center text-3xl font-bold mb-7 mt-12">Recent Products</h3>
            <ProductList />
        </div>
    )
}

export default RecentProducts;