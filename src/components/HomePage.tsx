import Navbar from "./Navbar";
import Footer from "./Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <img
          src="/banner.jpeg"
          className="h-[35rem] object-cover w-full z-0 opacity-60"
          alt="Banner"
        />
        <div className="flex flex-col bg-orange-50 w-[30rem] h-80 z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 pt-8 pr-10">
          <p className="tracking-wide mb-2">New Arrival</p>
          <h2 className="text-4xl font-bold text-yellow-600 mb-2">
            Discover Our New Collection
          </h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <a>
            <button className="h-20 w-40 bg-yellow-600 hover:bg-yellow-700 text-white font-bold">
              BUY NOW
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
