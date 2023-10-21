/* eslint-disable react/prop-types */
import Navbar from "./Navbar";
import BrandDtl from "./BrandDtl";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Brand = () => {
    
    const {id} = useParams();
    const[product, setProductsCard] = useState([]);
    const products = useLoaderData();

    useEffect(() => {
        const findProduct = products?.find(product => product.id == id);
        setProductsCard(findProduct);
    }, [products, id]);
    

    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <div className="carousel w-full" data-aos="fade-up" >
                <div id="slide1" className="carousel-item relative w-full">
                  <img src="https://i.ibb.co/KKzqxF2/8.jpg" className="w-full h-[500px]"/>
                  <div className=" absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                  <img src="https://i.ibb.co/Zcs5Hrq/sony-tv.jpg" className="w-full h-[500px]"/>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                  <img src="https://i.ibb.co/XCxvQDQ/sony-fridge.jpg"className="w-full h-[500px]"/>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                  </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                <h2 className="text-xl lg:text-5xl font-bold italic text-center text-orange-400 my-5">Added Brand Collections</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        products?.map(product => <BrandDtl key={product._id} products={product}></BrandDtl>)
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Brand;