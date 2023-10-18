import { useLoaderData } from "react-router-dom";
import Banner from "./componenets/Banner";
import Brands from "./componenets/Brands";
import Navbar from "./componenets/Navbar";
import Footer from "./componenets/Footer";

const Homepage = () => {

    const brands = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <Brands brands={brands}></Brands>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;