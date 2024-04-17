import { Link } from "react-router-dom";
import NavBar from "../shared/Navbar/Navbar";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import app from '../../firebase/firebase.config'
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Login = () => {

  const auth = getAuth(app);
  const GoogleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider
  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, GoogleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error =>{
      console.log('error', error.message)
    })
  }

  const handleGithubSignIn = () =>{
    signInWithPopup(auth, GithubProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error =>{
      console.log('error', error.message)
    })
  }


  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.title = "LuxeNext | Login";
  }, []);

  const { signIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        console.log(result.user);
        toast.success("Login successful!");
      })
      .catch(error => {
        console.error(error);
        if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
          toast.error("Invalid email or password. Please try again.");
        } else {
          toast.error("An error occurred. Please try again later.");
        }
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <NavBar />
      <h2 className="text-3xl text-center mt-6 mb-4">Login your account</h2>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body pb-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  className="input input-bordered w-80" 
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="text-xl absolute right-4 top-3"
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover mt-2">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-4">
              <button className="btn bg-slate-900 text-white">Login</button>
            </div>
            <div>
              <button className="text-4xl ml-24 mt-4 top-4" onClick={handleGoogleSignIn}><FaGoogle /></button>
              <button className="text-4xl ml-16 mt-4 top-4" onClick={handleGithubSignIn}><FaGithub /></button>
            </div>
            <ToastContainer />
          </form>
          <p className="text-center mb-6">
            Do not have an account?{" "}
            <Link to="/register">
              <span className="text-red-700">Register</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
