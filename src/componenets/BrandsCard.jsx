/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BrandsCard = ({brands}) => {
    const {id, brand_image, brand_name} = brands || {}
    console.log(brands)
  return (
    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
      <Link to={`/brand/${id}`}>
        <div className="card bg-gradient-to-r from-blue-400 to-indigo-300 shadow-xl">
          <figure>
            <img className="h-40 w-full" src={brand_image} alt="Shoes"/>
          </figure>
          <div className="card-body">
            <h2 className=" text-2xl font-bold italic text-center text-white">{brand_name}</h2>
          </div>
        </div>
      </Link>

    </div>
  );
};

export default BrandsCard;
