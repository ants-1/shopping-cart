function BrowseRange() {
  return (
    <div className="flex flex-col items-center mt-10 mb-10">
      <div className="mb-10">
        <h3 className="text-center text-2xl font-bold mb-2">Browse Range</h3>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        <div className="w-96 cursor-pointer group hover:scale-105 transition-transform">
          <img
            src="/coat-range.jpeg"
            className="h-[30rem] w-96 object-cover rounded-lg"
            alt=""
          />
          <p className="text-center font-semibold text-lg mt-5">Coats</p>
        </div>
        <div className="w-96 cursor-pointer group hover:scale-105 transition-transform">
          <img
            src="/jeans-range.jpeg"
            className="h-[30rem] w-96 object-cover rounded-lg"
            alt=""
          />
          <p className="text-center font-semibold text-lg mt-5">Jeans</p>
        </div>
        <div className="w-96 cursor-pointer group hover:scale-105 transition-transform">
          <img
            src="/top-range.jpeg"
            className="h-[30rem] w-96 object-cover rounded-lg"
            alt=""
          />
          <p className="text-center font-semibold text-lg mt-5">Tops</p>
        </div>
      </div>
    </div>
  );
}

export default BrowseRange;
