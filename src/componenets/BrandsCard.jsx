/* eslint-disable react/prop-types */

const BrandsCard = ({brands}) => {
    const { brand_image, brand_name} = brands || {}
    console.log(brands)
  return (
    <div>
      <div className="card bg-gradient-to-r from-blue-400 to-indigo-300 shadow-xl">
        <figure>
          <img className="h-40 w-full" src={brand_image} alt="Shoes"/>
        </figure>
        <div className="card-body">
          <h2 className=" text-2xl font-bold italic text-center">{brand_name}</h2>
        </div>
      </div>

    </div>
  );
};

export default BrandsCard;
