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
            <h2 className="text-xl lg:text-5xl font-bold italic text-center text-orange-400 my-5">Added Brand Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    products?.map(product => <BrandDtl key={product.id} products={product}></BrandDtl>)
                }
                
            </div>
        </div>
    );
};

export default Brand;