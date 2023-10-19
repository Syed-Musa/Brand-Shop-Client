/* eslint-disable react/prop-types */

import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Cart from "./Cart";

const MyCart = () => {
  const brands = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <h2 className="text-xl lg:text-5xl font-bold italic text-center text-orange-400 my-7">Cart Sections</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {
          brands?.map(brand => <Cart key={brand._id} brands={brand}></Cart>)
        }
      </div>
    </div>
  );
};

export default MyCart;
