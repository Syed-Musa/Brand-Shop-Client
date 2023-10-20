import { useLoaderData } from "react-router-dom";
import Banner from "./componenets/Banner";
import Brands from "./componenets/Brands";
import Navbar from "./componenets/Navbar";
import Footer from "./componenets/Footer";
import AboutUs from "./componenets/AboutUs";
import OurFeatured from "./componenets/OurFeatured";

const Homepage = () => {

    const brands = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <Brands brands={brands}></Brands>
            <AboutUs></AboutUs>
            <OurFeatured></OurFeatured>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;