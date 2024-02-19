import ProductList from "./ProductList";

function FilterBar() {
  return (
    <>
      <div className="flex items-center justify-around p-5 bg-orange-50 h-20">
        <div className="flex">
          <div className="mr-10">
            <img src="" alt="" />
            <p>Filter</p>
          </div>
          <div>
            <p>Sort By</p>
            {/* Add dropdown menu here */}
          </div>
        </div>
        <div className="w-96">
          {/* Add search bar here */}
          <form className="max-w-md mx-auto">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:outline-none  focus:border-yellow-500"
                placeholder="Search..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-yellow-600 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col items-center m-10">
        <ProductList />
        <div className="flex gap-6 mt-10 mb-5">
            <button className="h-10 w-10 rounded-md hover:text-white bg-orange-50 hover:bg-yellow-600">1</button>
            <button className="h-10 w-10 rounded-md hover:text-white bg-orange-50 hover:bg-yellow-600">2</button>
            <button className="h-10 w-10 rounded-md hover:text-white bg-orange-50 hover:bg-yellow-600">3</button>
            <button className="h-10 w-10 rounded-md hover:text-white bg-orange-50 hover:bg-yellow-600">4</button>
        </div>
      </div>
    </>
  );
}

export default FilterBar;
