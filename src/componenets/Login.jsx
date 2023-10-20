import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";

const Login = () => {

  const {signInUser} = useContext(AuthContext);

  const handleLogin = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
    .then(result => {
      console.log(result.user);
      const user = {
        email,
        lastLoggedAt: result.user?.metadata?.lastSignInTime
      }
      fetch('http://localhost:5000/user', {
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
    })
  }

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className=" font-bold text-xl lg:text-5xl italic text-center text-orange-400 my-7">Login now!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-blue-400 to-indigo-300 p-5">
            <form onSubmit={handleLogin} className="card-body ">
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
              <p className="text-center mt-3">
              Do not have an account{" "}
              <Link to="/register" className="text-blue-700 font-bold">
                Register
              </Link>
            </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
