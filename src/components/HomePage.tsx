import HomeBanner from "./HomeBanner";
import BrowseRange from "./BrowseRange";
import RecentProducts from "./RecentProducts";

function HomePage() {
  return (
    <>
      <HomeBanner />
      <div className="bg-gray-50 py-10">
        <BrowseRange />
        <RecentProducts />
      </div>
    </>
  );
}

export default HomePage;
