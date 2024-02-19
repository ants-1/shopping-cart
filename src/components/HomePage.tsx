import Navbar from "./Navbar";
import Banner from "./Banner";
import BrowseRange from "./BrowseRange";
import RecentProducts from "./RecentProducts";
import Footer from "./Footer";

function HomePage() {
    return (
        <>
            <Navbar />
            <Banner />
            <BrowseRange />
            <RecentProducts />
            <Footer />
        </>
    );
};

export default HomePage;