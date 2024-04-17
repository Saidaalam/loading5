import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const NavBar = () => {

  const {user, logOut} =  useContext(AuthContext);

  const handleSignOut = () => {
     logOut()
     .then()
     .catch()
  }

  const navLinks = <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/career">Blogs</NavLink></li>
      <li><NavLink to="/offer">Special Offer</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
  </>

    return (
        <div className="navbar bg-base-100 mt-6">
  <div className="navbar-start">
    <div className="dropdown">
    <h2 className="text-3xl font-bold">LuxeNest</h2>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
         </ul>
    </div> </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end gap-4">
  <div className="w-12 rounded-full">
        </div>
        {
            user ?
            <button onClick={handleSignOut} className="btn bg-slate-800 text-white px-10">Sign Out</button>
            :
            <Link to="/login">
            <button className="btn bg-slate-800 text-white px-10">Login</button>
            </Link>
        }
  </div>
</div>
    );
};

export default NavBar;