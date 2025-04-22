import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { FaGithub, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-white flex flex-col items-center justify-center py-[100px] px-[80px] mt-27.5">
            <div className="mb-4 lg:mb-8">
                <Link to="/" className="btn btn-ghost p-0">
                    <img
                        className="w-8 mr-2 lg:w-11 lg:mr-4"
                        src={logo}
                        alt=""
                    />
                    <h1 className="text-2xl lg:text-[32px] font-jakarta-sans font-extrabold">
                        Phudu
                    </h1>
                </Link>
            </div>
            <div>
                <div className="mb-4 lg:mb-8">
                    <ul className="menu menu-horizontal flex flex-col lg:flex-row gap-5 lg:gap-12 text-left font-jakarta-sans text-[14px] lg:text-[18px] font-medium">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "bg-[#176AE5] text-white p-2 rounded-lg" : "p-2"
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "bg-[#176AE5] text-white p-2 rounded-lg" : "p-2"
                            }
                            to="/my-bookings"
                        >
                            My-Bookings
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "bg-[#176AE5] text-white p-2 rounded-lg" : "p-2"
                            }
                            to="/blogs"
                        >
                            Blogs
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "bg-[#176AE5] text-white p-2 rounded-lg" : "p-2"
                            }
                            to="/contact-us"
                        >
                            Contact Us
                        </NavLink>
                    </ul>
                </div>
            </div>
            <div className="divider w-4/5 mx-auto"></div>
            <div className="flex gap-6 mt-4 lg:mt-8">
                <a href="https://github.com/">
                    <FaGithub size={36} />
                </a>
                <a href="https://www.linkedin.com/">
                    <FaLinkedin size={36} />
                </a>
                <a href="https://www.facebook.com/">
                    <FaFacebook size={36} />
                </a>
                <a href="https://www.youtube.com/">
                    <FaYoutube size={36} />
                </a>
            </div>
        </div>
    );
};

export default Footer;
