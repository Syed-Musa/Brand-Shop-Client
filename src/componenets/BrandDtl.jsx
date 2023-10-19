/* eslint-disable react/prop-types */

const BrandDtl = ({brands}) => {

    const {name, brandname, choose, price, description, photo} = brands || {}

  return (
    <div>
        
      <div className="card bg-gradient-to-r from-blue-400 to-indigo-300 shadow-xl">
        
        <figure>
          <img src={photo} alt="Shoes"/>
        </figure>
        <div className="card-body">
          <h2 className="text-xl italic  font-bold">Name: {name}</h2>
          <h2 className="text-xl italic  font-bold">Brand Name: {brandname}</h2>
          <p className="text-xl  italic font-bold">Choose: {choose}</p>
          <p className="text-xl  italic font-bold">Price: {price}</p>
          <p className="text-xl  italic font-bold">Description: {description}</p>
          <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"checked/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDtl;
