import Swal from "sweetalert2";
import Navbar from "./Navbar";

const AddProduct = () => {

    const handleAddBrands = e =>{
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const choose = form.choose.value;
        const price = form.price.value;
        const description = form.description.value;
        const photo = form.photo.value;

        const newBrand = {name, brand, choose, price, description, photo}
        console.log(newBrand);

        fetch('http://localhost:5000/brand', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBrand)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Add your product has been success',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <div className="bg-gradient-to-r from-blue-400 to-indigo-300 p-10">
      <h2 className="text-xl lg:text-5xl font-bold italic text-center text-orange-400 my-5">ADD PRODUCT</h2>
      <form onSubmit={handleAddBrands}>
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
                name="brand"
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
                placeholder="price"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* Rating */}
          <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"checked/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
          </div>
        </div>

        {/* Short Descrition */}
        <h2 className="text-white font-bold">Short Description</h2>
        <textarea name="description" className="textarea textarea-bordered w-full"></textarea>

        {/* Photo URL */}
        <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-white">Photo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="photo"
                className="input input-bordered w-full"
              />
            </label>
        </div>

        {/* Add Brands */}
        <input type="submit" name="Add Brands" id="" className="w-full my-4 btn bg-orange-400 text-white"  />
        </div>
      </form>
      </div>
    </div>
  );
};

export default AddProduct;
