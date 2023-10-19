import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import BrandDtl from "./BrandDtl";
import { useEffect, useState } from "react";

const Brand = () => {

    const brands = useLoaderData();
    const {id} = useParams();
    const [brand, setBrandCard] = useState([]);

    {
        useEffect(()=> {
            const findBrand = brands?.find(brand => brand.id == id);
            setBrandCard(findBrand);
        },[brands, id]);
    }

    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <h2 className="text-xl lg:text-5xl font-bold italic text-center text-orange-400 my-5">Added Brand Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    brands.map(brand => <BrandDtl key={brand._id} brands={brand}></BrandDtl>)
                }
            </div>
            
        </div>
    );
};

export default Brand;