/* eslint-disable react/prop-types */
const BrandDtl = ({products}) => {

    const {name, brandname, type, price, description, sm_pic} = products || {}
    console.log(products);
  return (
    <div>
        
      <div className="card bg-gradient-to-r from-blue-400 to-indigo-300 shadow-xl">
        
        <figure>
          <img className="h-60 w-full" src={sm_pic} alt="Shoes"/>
        </figure>
        <div className="card-body">
          <p className="font-bold italic">Name: {name}</p>
          <p className="font-bold italic">Brand Name: {brandname}</p>
          <p className="font-bold italic">Type: {type}</p>
          <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          </div>
          <p className="font-bold italic">Price: {price}</p>
          <p className="font-bold italic">Description: {description}</p>
          
          <div className="card-actions">
            <button className="btn font-bold bg-gradient-to-r from-red-400 to-orange-300 w-full">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDtl;
