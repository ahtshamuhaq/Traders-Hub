import React from "react";
import Double from "../assets/double.png";

export default function Mentorship() {
  return (
    <div className="flex justify-center items-center ">
      <div className="shadow-xl w-full md:w-1/2 bg-black text-white flex flex-col px-24 py-10 mb-16 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
        <img
          className="w-20 mx-auto mt-[-3rem] bg-white"
          src={Double}
          alt="/"
        />
        <h2 className="text-2xl font-bold text-center py-8">
          1 on 1 Mentorship
        </h2>
        <p className="text-center text-4xl font-bold">$250</p>
        <div className="text-center font-medium">
          <p className="py-2 border-b mx-8 mt-8">15 Days Process</p>
          <p className="py-2 border-b mx-8">Live Mentorship</p>
          <p className="py-2 border-b mx-8">From Basic to Advance </p>
        </div>
        <button className="bg-[#00DDC3] hover:bg-white hover:text-black text-white  w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
          Join Now
        </button>
      </div>
    </div>
  );
}
