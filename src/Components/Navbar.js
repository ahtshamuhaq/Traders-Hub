import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import th from '../assets/TH.jpg'
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white my-3  ">
    <img className="rounded-full w-12 h-12" src={th} alt="th" />
      <h1 className="w-full text-3xl font-bold mx-4 text-purple-500">
        Traders Hub
      </h1>
      <ul className="hidden md:flex">
        <li className="mt-4 ml-4 hover:cursor-pointer hover:underline hover:text-purple-500 hover:text-xl hover:font-bold">
          <Link to="cards" smooth={true} duration={500}>
            Plans
          </Link>
        </li>
        <li className="mt-4 ml-4 hover:cursor-pointer hover:underline hover:text-purple-500 hover:text-xl hover:font-bold">
          <Link to="Analytics" smooth={true} duration={500}>
            Resources
          </Link>
        </li>
        <li className="mt-4 ml-4 hover:cursor-pointer hover:underline hover:text-purple-500 hover:text-xl hover:font-bold">
          <Link to="">About</Link>
        </li>
        <li className="mt-4 ml-4 hover:cursor-pointer hover:underline hover:text-purple-500 hover:text-xl hover:font-bold">
          <Link to="Footer" smooth={true} duration={1000}>
          Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 mt-[43rem] w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <li className="p-4 border-b hover:cursor-pointer hover:underline hover:text-purple-500 border-gray-600">
          <Link to="home">Plans</Link>
        </li>
        <li
          className="p-4 border-b hover:cursor-pointer hover:underline hover:text-purple-500 border-gray-600"
         
        >
          Resources
        </li>
        <li className="p-4 border-b hover:cursor-pointer hover:underline hover:text-purple-500 border-gray-600">
          <Link to="analytics">About</Link>
        </li>
        <li className="p-4 border-b hover:cursor-pointer hover:underline hover:text-purple-500 border-gray-600">
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
