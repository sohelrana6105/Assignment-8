import React from "react";
import Logo from "../../assets/logo.png";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router";
const Footer = () => {
  return (
    <div className="bg-[#FFFFFF] shadow-2xl flex flex-col items-center py-24">
      <div className="footer-top flex items-center gap-8 mb-8">
        <div>
          <img className="w-9" src={Logo} alt="" />
        </div>
        <h1 className="text-3xl font-bold ">Phudu</h1>
      </div>

      <div className="footer-middle">
        <ul className="flex gap-12">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? " border-[#9c8b7e] border-b-2 p-1" : ""
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
      <div className="border-1 border-[#ebe5e5] my-8 w-[70%]"></div>
      <div>
        <ul className="flex gap-4">
          <li>
            <NavLink to={"https://www.facebook.com/"} target="_blank">
              <FaFacebook size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink to={"https://x.com/i/flow/login"} target="_blank">
              <FaXTwitter size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink to={"https://www.linkedin.com/"} target="_blank">
              <FaLinkedin size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink to={"https://www.youtube.com/"} target="_blank">
              <FaYoutube size={25} />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
