import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductList from "./ProductList";

function ProductPage() {
  return (
    <>
      <Navbar />
      <div className="flex gap-6 bg-orange-50 px-20 py-8">
        <p className="text-gray-400 p-2">Home</p>
        <span className="p-2">{" > "}</span>
        <p className="text-gray-400 p-2">Shop</p>
        <span className="p-2">{" > "}</span>
        <p className="p-2">Product Name</p>
      </div>
      <div className="flex border-b-4 py-10 px-20 justify-center">
        <div className="flex flex-col gap-2">
          <img
            src="/jeans-range.jpeg"
            className="h-20 w-24 rounded-md object-cover"
            alt=""
          />
          <img
            src="/jeans-range.jpeg"
            className="h-20 w-24 rounded-md object-cover"
            alt=""
          />
          <img
            src="/jeans-range.jpeg"
            className="h-20 w-24 rounded-md object-cover"
            alt=""
          />
          <img
            src="/jeans-range.jpeg"
            className="h-20 w-24 rounded-md object-cover"
            alt=""
          />
        </div>
        <div className="ml-5 mr-10">
          <img
            src="/jeans-range.jpeg"
            className="h-[28rem] w-[30rem] object-cover rounded-md"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between w-96 py-4">
          <h2 className="text-5xl font-light">Product Name</h2>
          <p className="text-3xl font-light text-gray-500">£60</p>
          {/* Add rating */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <p className="text-gray-400">Size</p>
          <div className="flex gap-5">
            <button className="h-10 w-10 bg-orange-100 hover:text-white hover:bg-yellow-600 rounded-md">
              XS
            </button>
            <button className="h-10 w-10 bg-orange-100 hover:text-white hover:bg-yellow-600 rounded-md">
              S
            </button>
            <button className="h-10 w-10 bg-orange-100 hover:text-white hover:bg-yellow-600 rounded-md">
              M
            </button>
            <button className="h-10 w-10 bg-orange-100 hover:text-white hover:bg-yellow-600 rounded-md">
              L
            </button>
            <button className="h-10 w-10 bg-orange-100 hover:text-white hover:bg-yellow-600 rounded-md">
              XL
            </button>
          </div>
          <p className="text-gray-400">Colour</p>
          <div className="flex gap-4">
            <div className="rounded-full h-5 p-5 w-5 bg-black hover:cursor-pointer"></div>
            <div className="rounded-full h-5 p-5 w-5 bg-red-900 hover:cursor-pointer"></div>
            <div className="rounded-full h-5 p-5 w-5 bg-blue-700 hover:cursor-pointer"></div>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex border rounded-md h-10 w-20">
              <span className="flex items-center justify-center w-1/3 hover:bg-orange-100 cursor-pointer">
                -
              </span>
              <span className="flex items-center justify-center w-1/3">1</span>
              <span className="flex items-center justify-center w-1/3 hover:bg-orange-100 cursor-pointer">
                +
              </span>
            </div>
            <button className="border rounded-md h-10 w-40 px-6 hover:bg-yellow-600 hover:text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-10">
        <h3 className="text-3xl font-bold">Related Products</h3>
        <ProductList />
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
