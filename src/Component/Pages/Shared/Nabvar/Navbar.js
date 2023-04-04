import React from 'react';
import { Link } from 'react-router-dom';
import lgo from '../../../../Images/Vector.png'
const Navbar = () => {
    const menuItems = <React.Fragment>
       
            <li className='mx-6'><Link to='/'>Home</Link></li>
            <li className='mx-6'><Link to='/'>Our Offerings</Link></li>
            <li className='mx-6'><Link to='/'>Our Team</Link></li>
            <li className='mx-6'><Link to='/'>Contact Us</Link></li>
            <li className='mx-6'><Link to='/'>Blogs</Link></li>
       

    </React.Fragment>
    return (
        <div>
            <div className="navbar shadow-lg pt-6 text-lg px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link className=' w-14'><img src={lgo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex text-black font-semibold text-sm">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className='text-white text-sm bg-primary py-3 px-6 rounded font-semibold'>Register Now</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;