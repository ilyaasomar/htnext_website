"use client";
import styles from "../styles";
import logo from "./img/mini-01.png";
import { navLinks } from "../constant";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
// import { TwitterIcon } from "react-icons/fa";
import TwitterIcon from "@mui/icons-material/Twitter";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="bg-gray-50 z-10 sticky top-0 border-b-2">
      <nav className="max-w-[1640px] mx-auto md:px-10 py-5 navbar">
        {/* parent div */}
        <div className="flex justify-between items-center relative">
          {/* logo */}
          <div className="text-3xl font-bold">
            {/* <h1>Logo</h1> */}
            <div className="flex gap-2 justify-center px-3">
              <Image
                src={logo}
                alt="Logo"
                className="w-32 h-14 cursor-pointer"
              />
            </div>
          </div>
          {/* menus */}
          <div
            className={`hidden md:flex justify-between list-none gap-10 text-xl font-normal hover:cursor-pointer`}
          >
            {navLinks.map((links) => (
              <li className="text-secondary">{links.title}</li>
            ))}
          </div>
          {/* right side button */}
          <div className="hidden md:flex gap-4 items-center justify-between">
            <div className="flex space-x-3">
              <div className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 bg-secondary rounded-md">
                <FaFacebookF className="md:w-5 md:h-5 text-white cursor-pointer" />
              </div>
              <div className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 bg-secondary rounded-md">
                <FaInstagram className="md:w-5 md:h-5 text-white cursor-pointer" />
              </div>
              <div className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 bg-secondary rounded-md">
                <FaLinkedinIn className="md:w-5 md:h-5 text-white cursor-pointer" />
              </div>
              <div className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 bg-secondary rounded-md">
                <TwitterIcon className="md:w-5 md:h-5 text-white cursor-pointer" />
              </div>
            </div>
            <div className=""></div>
          </div>
          <div className="md:hidden px-3">
            {openMenu ? (
              <AiOutlineClose
                className="w-8 h-8 text-secondary cursor-pointer"
                onClick={() => setOpenMenu((prev) => !prev)}
              />
            ) : (
              <GiHamburgerMenu
                className="w-8 h-8 text-secondary cursor-pointer"
                onClick={() => setOpenMenu((prev) => !prev)}
              />
            )}
          </div>
          {/* mobile menu division */}
          <div
            className={`md:hidden absolute top-[65px] items-center duration-300 z-10
          ${openMenu ? "right-0" : "hidden"}`}
          >
            <div className="bg-gray-500 w-36 rounded-xl flex flex-col items-center list-none space-y-3 py-2 text-white font-semibold">
              <li>
                <a href="#" className="hover:text-[#05156D]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#05156D]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#05156D]">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#05156D]">
                  Work
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#05156D]">
                  Contact Us
                </a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
