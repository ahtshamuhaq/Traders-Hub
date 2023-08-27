import React from "react";
import arrow from "../assets/arrow.png";
const TradingViewWidget = () => {
  return (
    <div className=" flex flex-row justify-center items-center p-2  sm:flex bg-gradient-to-r from-[#00DDC3] from-40% to-purple-500 ...">
      <p className=" hover:cursor-pointer text-center text-white">
        Join live Batches
      </p>
      <img
        className=" hover:cursor-pointer ml-2 mt-1 w-5 h-5"
        src={arrow}
        alt="a"
      />
    </div>
  );
};

export default TradingViewWidget;
