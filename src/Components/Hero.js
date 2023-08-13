import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        {/* <p className='text-[#00df9a] font-bold p-3 mt-3 text-xl'>
         Road to become an independent trader
        </p> */}
        <h1 className="md:text-4xl sm:text-3xl text-3xl font-bold md:py-6">
          Road to become an{" "}
          <span className="text-purple-600">Independent Trader</span>
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Live Btaches, free updates of
          </p>
          <Typed
            className="md:text-4xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-purple-600"
            strings={["Crypto "  ,   "  Forex"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-400 font-mono mt-4">
        Our Aim is Financial Freedom for you!
          {/* Join our Discord,Facebook & WhatsApp Communities to grow with Traders
          Hub */}
        </p>
        <a href="https://discord.gg/Ww6BQSuu">
        <button className="bg-purple-500 w-[200px] rounded-md font-bold mt-12 mx-auto py-4 text-2xl text-white hover:scale-110">
          Get Started
        </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
