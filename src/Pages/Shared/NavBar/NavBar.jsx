import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { TiShoppingCart } from "react-icons/ti";
import useCart from "../../../Hooks/useCart";



const NavBar = () => {

  const {user,logOut}=useContext(AuthContext)
  const [cart]=useCart()

  const handleLogOut=()=>{
    logOut()
    .then()
    .catch()
  }
    const navLinks=<>

    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/addFood'>CREATE SHOP</NavLink></li>
    <li><NavLink to='/signup'>REGISTER</NavLink></li>
    <li><NavLink to='/contact'>WATCH DEMO</NavLink></li>
    <li><NavLink to='/dashboard/cart'><button className="flex bg-slate-700 mb-1 p-1 rounded">
    < TiShoppingCart />
  <div className="badge badge-secondary ml-2">{cart.length}</div>
</button></NavLink></li>
    </>
    return (
        <div className="">
            <div className="navbar fixed z-10 bg-opacity-30 bg-black max-w-screen-xl text-white mb-5">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <div className="flex items-center space-x-2"> 
            <img
              src="https://i.ibb.co/wBrpzYH/kkkkkkkk.jpg"
              className="w-12 h-12 rounded-full"
              alt="Food Logo"
            />
            <a className="btn btn-ghost normal-case text-xl">ReadMatrix</a>
          </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src='https://i.ibb.co/8YNnHk1/user.png' />
        </div>
      </label>
    
      {
    user? <>
    <span>{user?.displayName}</span>
    <button onClick={handleLogOut} className="btn btn-active btn-ghost">Log Out</button></> : <><Link to='/login'><button className="btn">Login</button></Link> </>
  }

    
  
  </div>
  
</div>
            
        </div>
    );
};

export default NavBar;