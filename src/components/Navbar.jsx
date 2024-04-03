
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";



const Navbar = () => {
  const {user, loggedOut}= useContext(AuthContext)
  console.log(user,'navuse')
    const navLinks = <>
     <li><NavLink to='/'>Home</NavLink></li>
     <li><NavLink to='/login'>Login</NavLink></li>
     <li><NavLink to='/register'>Register</NavLink></li>
     {
      user && <>
          <li><NavLink to='/profile'>Profile</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
      </>
     }
     </>
    const handleLoggedOut=()=>{
      loggedOut()
    }

    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">51-practice</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user? <> <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className=" m-1"><div className="avatar">
        <div className="w-12 p-2 rounded-full">
          {
            user?.photoURL? <img className="rounded-full" src={user.photoURL}/> : <p>click</p>
          }
         
        </div>
      </div>
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 w-40">
     
          <li>
            <a href="#" className="block">{user.email}</a>
          </li>
          <li>{
                user?.displayName &&  <a href="#" className="block">{user.displayName}</a>

              }
            </li>
          <li><button onClick={handleLoggedOut} className="btn btn-ghost">Sign out</button></li>
      </ul>
    </div>
      </>: <Link to='/login' ><button className="btn btn-primary">Login</button></Link>
    }
    
   
  </div>
</div>
    );
};

export default Navbar;