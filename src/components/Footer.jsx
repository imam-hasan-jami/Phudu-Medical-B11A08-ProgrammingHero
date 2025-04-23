import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import githubLogo from "../assets/github-logo.png";
import linkedinLogo from "../assets/linkedin-logo.png";
import facebookLogo from "../assets/facebook-logo.png";
import instagramLogo from "../assets/instagram-logo.png";

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
                <a href="https://github.com/imam-hasan-jami" target="_blank">
                    <img className="w-9" src={githubLogo} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/imam-hasan-jami/" target="_blank">
                    <img className="w-9" src={linkedinLogo} alt="" />
                </a>
                <a href="https://www.facebook.com/cristiano7sadi" target="_blank">
                    <img className="w-9" src={facebookLogo} alt="" />
                </a>
                <a href="https://www.instagram.com/chainless_slave1.0" target="_blank">
                    <img className="w-9" src={instagramLogo} alt="" />
                </a>
            </div>
        </div>
    );
};

export default Footer;
