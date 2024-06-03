import { Link, NavLink } from "react-router-dom";
import User from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const NaveBar = () => {
    const { logOut, user } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(console.log('Logout Successfull'))
            .catch(error => console.error(error))
    }
    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                {
                    user ? <>
                        <img src={User} alt={user.email} className="w-12" />
                        <Link onClick={handleLogOut} to='/login' className="bg-red-500 text-white px-8 py-2">Log Out</Link>
                    </> : <Link to='/login' className="bg-secondary text-white px-8 py-2">Login</Link>
                }
            </div>
        </div>
    );
};

export default NaveBar;