import Navbar from './Navbar'
import Footer from './Footer'
import FilterBar from './FilterBar'

function Shop() {
    return (
      <>
        <Navbar />
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
        <Footer />
      </>
    )
  }
  
  export default Shop