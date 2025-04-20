import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 max-w-[1440px] mx-auto p-0 my-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-jakarta-sans font-medium"
                    >
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "border-b-2" : ""
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "border-b-2" : ""
                            }
                            to="/my-bookings"
                        >
                            My-Bookings
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "border-b-2" : ""
                            }
                            to="/blogs"
                        >
                            Blogs
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "border-b-2" : ""
                            }
                            to="/contact-us"
                        >
                            Contact Us
                        </NavLink>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost p-0">
                    <img className="w-11 mr-4" src={logo} alt="" />
                    <h1 className='text-[32px] font-jakarta-sans font-extrabold'>Phudu</h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal flex gap-12 font-jakarta-sans text-[18px] font-medium">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "border-b-2" : ""
                        }
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "border-b-2" : ""
                        }
                        to="/my-bookings"
                    >
                        My-Bookings
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "border-b-2" : ""
                        }
                        to="/blogs"
                    >
                        Blogs
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "border-b-2" : ""
                        }
                        to="/contact-us"
                    >
                        Contact Us
                    </NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#176AE5] rounded-[99px] font-jakarta-sans text-white text-[20px] px-[30px] py-[28px]">Emergency</a>
                {/* <Link to='/' className='bg-[#176AE5]'>Emergency</Link> */}
            </div>
        </div>
    );
};

export default Navbar;