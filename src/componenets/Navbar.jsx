import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navlinks = <>
        <li className="font-bold italic"><NavLink to="/">HOME</NavLink></li>
        <li className="font-bold italic"><NavLink to="/addproduct">ADD PRODUCT</NavLink></li>
        <li className="font-bold italic"><NavLink to="/mycart">MY CART</NavLink></li>
        <li className="font-bold italic"><NavLink to="/login">LOGIN</NavLink></li>
    </>

    return (
    <div>
        <div className="navbar bg-gradient-to-r from-blue-400 to-pink-300 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navlinks}
          </ul>
        </div>
        <a className=" normal-case text-[15px] lg:text-2xl font-bold italic  p-5 text-white">BRAND-SHOPS</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navlinks}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
