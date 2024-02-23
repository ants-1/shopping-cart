import Banner from "./Banner";

function Cart() {
  const bannerName: string = "Cart";

  return (
    <>
      <Banner name={bannerName} />
      <div className="h-screen pt-10">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            <div className="justify-between mb-6 rounded-lg bg-orange-100 p-6 shadow-md sm:flex sm:justify-start">
              <img
                src="/coat-range.jpeg"
                alt="product-image"
                className="w-40 rounded-lg h-32 object-cover"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">Coat</h2>
                  <p className="mt-1 text-xs text-gray-700">M</p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-3 sm:mt-0 sm:block sm:space-x-5">
                  <p className="text-xl ml-12">£200</p>
                  <div className="flex border rounded-md bg-white h-10 w-20">
                    <span className="flex items-center justify-center w-1/3 hover:bg-yellow-600 hover:rounded-l-md hover:text-white cursor-pointer">
                      -
                    </span>
                    <span className="flex items-center justify-center w-1/3">
                      1
                    </span>
                    <span className="flex items-center justify-center w-1/3 hover:bg-yellow-600 hover:rounded-r-md hover:text-white cursor-pointer">
                      +
                    </span>
                  </div>
                  <div className="flex items-center">
                    {" "}
                    <img
                      src="/bin-icon.png"
                      className="h-9 w-9 ml-10 hover:cursor-pointer p-2 hover:border border-black rounded-md"
                      alt="Bin icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <h2 className="text-center text-2xl font-bold mb-10">Cart Total</h2>
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">£129.99</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">£4.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">£134.98</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-yellow-600 text-white py-1.5 font-medium hover:bg-yellow-700">
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
