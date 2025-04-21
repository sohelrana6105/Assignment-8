import React from "react";
import Logo from "../../../assets/logo.png";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center px-20 py-10">
      <div className="nav-left flex items-center gap-8">
        <div>
          <img className="w-9" src={Logo} alt="" />
        </div>
        <h1 className="text-3xl font-bold">Phudu</h1>
      </div>
      <div className=" nav-middle ">
        <ul className="flex gap-12">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? " border-[#9c8b7e] border-b-2 p-1 text-[#f00606]"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/appointment"}
              className={({ isActive }) =>
                isActive ? " border-[#9c8b7e] border-b-2 p-1" : ""
              }
            >
              My-Bookings
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/blogs"}
              className={({ isActive }) =>
                isActive ? " border-[#9c8b7e] border-b-2 p-1" : ""
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink>Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <button className="px-6 py-2 bg-[#176AE5] rounded-3xl">
          <span className="text-white">Emergency</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
