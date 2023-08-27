import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white ">
      <div className=" mt-[-120px] w-auto sm:max-w-[800px] sm:mt-[-96px]  h-screen mx-auto text-center flex flex-col justify-center">
        {/* <p className='text-[#00df9a] font-bold p-3 mt-3 text-xl'>
         Road to become an independent trader
        </p> */}
        <h1 className="md:text-4xl sm:text-3xl text-2xl  font-bold md:py-6">
          Road to become an{" "}
          <span className="text-[#00DDC3]">Independent Trader</span>
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-4xl text-[14px] font-bold py-4">
            Live Mentorships & Updates Of
          </p>
          <Typed
            className="md:text-4xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#00DDC3]"
            strings={["Crypto ", "  Forex"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="text-sm md:text-2xl   font-bold text-gray-400 font-mono mt-4">
          Making Independent Traders in Industry
          {/* Join our Discord,Facebook & WhatsApp Communities to grow with Traders
          Hub */}
        </p>

        <a href="https://discord.gg/Ww6BQSuu">
          <button className="text-lg py-2  bg-[#00DDC3] w-[150px] sm:w-[200px] rounded-md font-bold mt-12 mx-auto sm:py-4 sm:text-2xl text-white hover:scale-110">
            Get Started
          </button>
        </a>
        {/* <a href="https://discord.gg/Ww6BQSuu">
            <button className="text-lg py-2  bg-[#00DDC3] w-[150px] sm:w-[200px] rounded-md font-bold mt-12 mx-auto sm:py-4 sm:text-2xl text-white hover:scale-110">
              Docs
            </button>
          </a> */}
      </div>
    </div>
  );
};

export default Hero;
