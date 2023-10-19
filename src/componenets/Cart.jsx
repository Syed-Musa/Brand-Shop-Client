/* eslint-disable react/prop-types */

const Cart = ({brands}) => {

    const {name, brandname, choose, price, description, photo} = brands;

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-60 h-60" src={photo} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{brandname}</p>
          <p>{brandname}</p>
          <p>{choose}</p>
          <p>{price}</p>
          <p>{description}</p>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
