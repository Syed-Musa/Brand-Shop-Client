import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext, useState } from "react";
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import ExtraLogin from "./ExtraLogin";

const Login = () => {

  const {signInUser} = useContext(AuthContext);
  const navigate = useNavigate()
  const [showPassword, setShowPassWord] = useState(null);
  const [success, setSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setSuccess(null);
    setErrorMessage(null);

    if(password.length > 6){
      setErrorMessage('Password should have at least 6 character');
      return;
    }else if(!/[A-Z]/.test(password)){
      setErrorMessage('Password should have at least one uppercase');
      return;
    }

    signInUser(email, password)
    .then(result => {
      console.log(result.user);
      navigate(location?.state ? location.state : '/');

      const user = {
        email,
        lastLoggedAt: result.user?.metadata?.lastSignInTime
      }
      fetch('https://brand-shop-server-9xp4u4f8r-syed-musa.vercel.app/user', {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
    })
    .catch(error => {
      console.error(error);
      setErrorMessage(error.message)
    })
  }

  return (
    <div className="max-w-7xl mx-auto" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
      <Navbar></Navbar>
      <div className="hero " >
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className=" font-bold text-xl lg:text-5xl italic text-center text-orange-400">Login now!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-blue-400 to-indigo-300 p-5">
            <form onSubmit={handleLogin} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-white">Password</span>
                </label>
                <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                />
                <span className="absolute text-2xl top-3 right-2" onClick={()=>setShowPassWord(!showPassword)}>
                    {
                      showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                    }
                </span>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt font-bold text-white  italic link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              
            </form>
            {
              errorMessage && <p className="text-red-600 italic font-bold text-xtext-center">{errorMessage}</p>
            }
            {
              success && <p className="text-green-600 italic font-bold text-xtext-center">{success}</p>
            }
              <p className="text-center text-white mt-3">
                Please go to{" "}
                <Link to="/register" className="text-blue-700 font-bold">
                  Register
                </Link>
              </p>
            <ExtraLogin></ExtraLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
