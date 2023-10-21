/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = ({brand, brands, setBrands}) => {

    const {_id, name, brandname, choose, price, rating, description, photo} = brand;

    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              

              fetch(`https://brand-shop-server-9xp4u4f8r-syed-musa.vercel.app/mycart/${_id}`, {
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your Brand Cart has been deleted.',
                        'success'
                    )
                    const remaining = brands.filter(brand => brand._id !== _id )
                    setBrands(remaining)
                }
              })
            }
        })
    }

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="py-10 pl-10">
          <img className="w-60 h-full" src={photo} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="font-bold italic">Name: {name}</h2>
          <p className="font-bold italic">Brand Name: {brandname}</p>
          <p className="font-bold italic">Choose: {choose}</p>
          <p className="font-bold italic">Price: {price}</p>
          <p className="font-bold italic">Ratings: {rating}</p>
          <p className="font-bold italic">Description: {description}</p>
          <div className="card-actions justify-end">
            <button onClick={()=> handleDelete(_id)} className="btn bg-red-600 font-bold text-white">X</button>
            <Link to={`/updateProduct/${_id}`}><button className="btn bg-green-600 font-bold text-white">Update</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
