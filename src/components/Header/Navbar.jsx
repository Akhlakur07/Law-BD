import React from "react";
import { Link } from "react-router";
import logo from "../../assets/logo-black.png"; // Adjust the path as necessary

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 py-6 px-28">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bookings">My-Bookings</Link>
          </li>
          <li>
            <Link>Blogs</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>
          </ul>
        </div>
        <div className="flex items-center">
          <img src={logo} alt="" />
          <p className="text-[32px] font-extrabold text-[#0F0F0FCC]">Law.BD</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-[#0F0F0FB3] text-lg font-medium gap-[18px]">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link to="/bookings">My-Bookings</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/error">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-xl btn-success rounded-4xl text-white">Contact Now</button>
      </div>
    </div>
  );
};

export default Navbar;
