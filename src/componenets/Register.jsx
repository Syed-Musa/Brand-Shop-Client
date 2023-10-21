import { useContext, useState } from "react"
import { AuthContext } from "../Providers/AuthProvider";
import Navbar from "./Navbar";
import Swal from "sweetalert2";
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { Link } from "react-router-dom";
import ExtraLogin from "./ExtraLogin";

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [showPassword, setShowPassWord] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setErrorMessage(null);
        setSuccess(null);

        if(password.length > 6){
          setErrorMessage('Password should have at least 6 character');
          return;
        }else if(!/[A-Z]/.test(password)){
          setErrorMessage('Password should have at least one uppercase');
          return;
        }

        createUser(email, password)
        .then(result => {
            console.log(result.user);
            const createdAt = result.user?.metadata?.creationTime;

            const user = {email, createdAt: createdAt};
            fetch('https://brand-shop-server-9xp4u4f8r-syed-musa.vercel.app/user',{
                method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User added to the database',
                    showConfirmButton: false,
                    timer: 1500
                })
                }
            })
        })
        .catch(error =>{
            console.error(error);
        })
    }

    return (
        <div className="max-w-7xl mx-auto" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
            <Navbar></Navbar>
            <div className="hero ">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="font-bold text-xl lg:text-5xl italic text-center text-orange-400">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-blue-400 to-indigo-300 p-5">
            <form onSubmit={handleRegister} className="card-body ">
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
                  <a href="#" className="label-text-alt text-white link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            {
              errorMessage && <p className="text-red-600 italic font-bold text-xtext-center">{errorMessage}</p>
            }
            {
              success && <p className="text-green-600 italic font-bold text-xtext-center">{success}</p>
            }
            <p className="text-center text-white mt-3">Already have an account? <Link to="/login" className="text-blue-700 font-bold">Login</Link></p>
            <ExtraLogin></ExtraLogin>
          </div>
        </div>
        </div>
        </div>
    );
};

export default Register;