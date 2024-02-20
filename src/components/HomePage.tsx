import Navbar from "./Navbar";
import HomeBanner from "./HomeBanner";
import BrowseRange from "./BrowseRange";
import RecentProducts from "./RecentProducts";
import Footer from "./Footer";

function HomePage() {
    return (
        <>
            <Navbar />
            <HomeBanner />
            <BrowseRange />
            <RecentProducts />
            <Footer />
        </>
    );
};

export default HomePage;