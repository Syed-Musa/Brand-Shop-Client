/* eslint-disable react/prop-types */

import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Cart from "./Cart";
import { useState } from "react";

const MyCart = () => {
  const loadedbrands = useLoaderData();
  const [brands, setBrands] = useState(loadedbrands);

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
        <h2 className="text-xl lg:text-5xl font-bold italic text-center text-orange-400 my-7">CART SECTIONS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {
            brands?.map(brand => <Cart key={brand._id} brand={brand} brands={brands} setBrands={setBrands}></Cart>)
          }
        </div>
      </div>
    </div>
  );
};

export default MyCart;
