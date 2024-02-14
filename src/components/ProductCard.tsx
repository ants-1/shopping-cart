function ProductCard() {
  return (
    <div className="w-72 max-w-sm bg-orange-50 border border-gray-200 rounded-lg shado">
      <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat cursor-pointer">
        <img
          className="h-72 w-full object-cover rounded-t-lg"
          src="/top-range.jpeg"
          alt="product image"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-white bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-40"></div>
      </div>
      <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 my-2">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900">
            £599
          </span>
          <a
            href="#"
            className="text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
