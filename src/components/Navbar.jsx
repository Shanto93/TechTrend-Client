import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);
            })

    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {
            user && <>
            <li><NavLink to='/addProduct'>Add Product</NavLink></li>
            <li><NavLink to='/myCart'>My Cart</NavLink></li> 
            </>
        }
        <li><NavLink to='/login'>Login</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start p-0">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <img className="w-28 mt-0 invisible md:visible" src="https://i.postimg.cc/pTvRMTNL/Logo02-removebgcroped02.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex justify-end items-center">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <p>{user.displayName}</p> :
                        ''
                }
                
                {
                    user ?
                        <img className="w-12 h-12 ml-3 rounded-full mt-0 " src={user.photoURL} alt="" /> :
                        ''
                }
                
                {
                    user ? <button onClick={handleSignOut} className="btn bg-[#e74c3c] text-white ml-3 font-bold hover:bg-[#e67e22]">Logout</button> :
                        ''
                    // <Link to='/login'><button className="btn bg-[#e74c3c] text-white font-bold">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;