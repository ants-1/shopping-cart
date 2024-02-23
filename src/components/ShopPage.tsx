import FilterBar from './FilterBar'

function Shop() {
    return (
      <>
        <div>
          <div className="relative h-72 flex-col flex justify-center text-black">
            <img
              src="/store-banner-image.png"
              className="absolute inset-0 h-full w-full object-cover z-0 opacity-50"
              alt="Shop Banner"
            />
            <div className="relative z-10">
              <h2 className="font-semibold text-6xl text-center">Shop</h2>
              <div className="font-semibold text-lg text-center mt-5">
                <a href="#">Home</a>
                <span>{' >'} Shop</span>
              </div>
            </div>
          </div>
        </div>
        <FilterBar />
      </>
    )
  }
  
  export default Shop