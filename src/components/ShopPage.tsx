import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductList from "./ProductList";

function ShopPage() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center py-10">
        <ProductList />
      </div>
    <Footer />
    </>
  );
}

export default ShopPage;
