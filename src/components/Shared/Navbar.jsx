import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';


const Navbar = () => {
    const [categories, setCategories] = useState([])
    const { user } = useContext(AuthContext)
    const [stickyClass, setStickyClass] = useState("relative")

    const stickNavbar = () => {
        if (window !== undefined) {
          let windowHeight = window.scrollY;
          windowHeight > 400 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
        }
      };




    useEffect(() => {
        window.addEventListener("scroll", stickNavbar);
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='my-6 relative w-'>
            <div className={`navbar bg-base-100 ${stickyClass}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 `} >
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/'}>About</Link></li>
                            <li><Link to={'/'}>Career</Link></li>
                            <div>
                                {
                                    categories.map(category => <p className='my-2 text-[#9F9F9F]'>{category.name}</p>)
                                }
                            </div>

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Dragon News</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className={`menu menu-horizontal px-1 `}>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/'}>About</Link></li>
                        <li><Link to={'/'}>Career</Link></li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">

                            {
                                user &&
                                <Link to={'/profile'}><img src={user.photoURL} /></Link>
                            }

                        </div>
                    </label>
                    {
                        user ? ''
                            : <Link to='/login' className='btn btn-small'>login</Link>
                    }
                </div>
            </div>


        </div>
    );
};

export default Navbar;