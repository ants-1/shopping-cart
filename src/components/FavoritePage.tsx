import Banner from "./Banner";
import ProductList from "./ProductList";

function FavoritePage() {
    const bannerName: string = "Favorites";
    return (
        <>
            <Banner name={bannerName} />
            <div className="flex flex-col items-center bg-gray-50 p-10">
                <ProductList />
            </div>
        </>
    )
}

export default FavoritePage;