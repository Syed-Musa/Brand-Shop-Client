import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider";
import Navbar from "./Navbar";

const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error);
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen ">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="font-bold text-xl lg:text-5xl italic text-center text-orange-400 my-7">Register now!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-blue-400 to-indigo-300 p-5">
            <form onSubmit={handleRegister} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
        </div>
        </div>
    );
};

export default Register;