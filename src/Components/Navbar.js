import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import th from "../assets/TH.jpg";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="flex justify-between items-center h-24 max-w-[80%] mx-auto px-4 text-white my-3  ">
        <img
          className="  w-7 h-7 rounded-full sm:w-12 sm:h-12"
          src={th}
          alt="th"
        />
        <h1 className="text-[21px] w-full sm:text-3xl font-bold mx-2 text-[#00DDC3]">
          Traders Hub
        </h1>
        <ul className="hidden md:flex">
          <li className="mt-4 ml-4 hover:cursor-pointer hover:underline hover:text-[#00DDC3] hover:text-xl hover:font-bold">
            <Link to="cards" smooth={true} duration={500}>
              Plans
            </Link>
          </li>
          <li className="mt-4 ml-4 hover:cursor-pointer hover:underline hover:text-[#00DDC3] hover:text-xl hover:font-bold">
            <Link to="Analytics" smooth={true} duration={500}>
              Resources
            </Link>
          </li>
          <li className="mt-4 ml-4 hover:cursor-pointer hover:underline hover:text-[#00DDC3] hover:text-xl hover:font-bold">
            <Link to="">About</Link>
          </li>
          <li className="mt-4 ml-4 hover:cursor-pointer hover:underline hover:text-[#00DDC3] hover:text-xl hover:font-bold">
            <Link to="Footer" smooth={true} duration={1000}>
              Contact
            </Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>
      {nav && (
        <ul className="">
          <li className="p-4 border-b hover:cursor-pointer  hover:underline text-white hover:text-[#00DDC3] border-gray-600">
            <Link onClick={handleNav} to="cards">
              Plans
            </Link>
          </li>
          <li className="p-4 border-b hover:cursor-pointer hover:underline text-white hover:text-[#00DDC3] border-gray-600">
            <Link onClick={handleNav} to="Analytics">
              Resources
            </Link>
          </li>
          <li className="p-4 border-b hover:cursor-pointer hover:underline text-white hover:text-[#00DDC3] border-gray-600">
            <Link onClick={handleNav} to="">
              About
            </Link>
          </li>
          <li
            onClick={handleNav}
            className="p-4 border-b hover:cursor-pointer hover:underline text-white hover:text-[#00DDC3] border-gray-600"
          >
            <Link onClick={handleNav} to="Footer">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
