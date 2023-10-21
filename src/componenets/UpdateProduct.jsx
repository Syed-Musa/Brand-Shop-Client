import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "./Navbar";

const UpdateProduct = () => {

    const brands = useLoaderData();
    const {_id, name, brandname, choose, price, rating, description, photo} = brands;

    const handleUpdateBrands = e =>{
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const brandname = form.brandname.value;
        const choose = form.choose.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const photo = form.photo.value;

        const UpdateBrand = {name, brandname, choose, price, rating, description, photo}
        console.log(UpdateBrand);

        fetch(`https://brand-shop-server-9xp4u4f8r-syed-musa.vercel.app/mycart/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateBrand)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if(data.modifiedCount > 0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Updated product has been success',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    return (
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
            <Navbar></Navbar>
        <div className="bg-gradient-to-r from-blue-400 to-indigo-300 p-10">
      <h2 className="text-xl lg:text-5xl font-bold italic text-center text-orange-400 my-5">UPDATE PRODUCT</h2>
      <form onSubmit={handleUpdateBrands}>
        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-around">
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-white">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* Brand Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-white">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brandname"
                defaultValue={brandname}
                placeholder="brand name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* Choose Type Device */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-white">Choose Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="choose"
                defaultValue={choose}
                placeholder="choose type"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* Price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-white">price</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="price"
                defaultValue={price}
                placeholder="price"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* Rating */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-white">rating</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="rating"
                defaultValue={rating}
                placeholder="rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* Short Descrition */}
        <h2 className="text-white font-bold">Short Description</h2>
        <textarea name="description" defaultValue={description} className="textarea textarea-bordered w-full"></textarea>

        {/* Photo URL */}
        <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-white">Photo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="photo"
                className="input input-bordered w-full"
              />
            </label>
        </div>

        {/* Add Brands */}
        <input type="submit" name="Update Brands" className="w-full my-4 btn bg-orange-400 text-white"  />
        </div>
      </form>
      </div>
        </div>
    );
};

export default UpdateProduct;