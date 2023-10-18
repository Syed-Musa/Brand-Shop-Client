/* eslint-disable react/prop-types */
import BrandsCard from "./BrandsCard";

const Brands = ({brands}) => {
    console.log(brands);
    return (
        <div>
            <h2 className="text-xl lg:text-5xl font-bold italic text-center text-orange-400 my-5">MOST POPULAR BRANDS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    brands?.map(brands => <BrandsCard key={brands.id} brands={brands}></BrandsCard>)
                }
            </div>
        </div>
    );
};

export default Brands;