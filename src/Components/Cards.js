import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div id="cards" className="w-full sm:w-auto mb-10 px-4">
      <div className="mb-20">
        {" "}
        <h2 className="text-4xl font-bold text-center text-white">
          Premium Discord
        </h2>
      </div>
      <div className=" flex flex-wrap w-full justify-between ">
        <div className=" bg-black w-full md:w-2/5  xl:w-1/4 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl  font-bold text-center text-white py-8">
            3 Months Subscription
          </h2>
          <p className="text-center text-4xl font-bold text-[#00DDC3]">$75</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8 text-white">
              Interactive Team
            </p>
            <p className="py-2 border-b mx-8 text-white">Live Updates</p>
            <p className="py-2 border-b mx-8 text-white">Weekly QnA Sessions</p>
          </div>
          <button className="bg-[#00DDC3] w-[200px] hover:bg-white hover:text-black text-white rounded-md font-medium my-6 mx-auto px-6 py-3">
            Join Now
          </button>
        </div>
        <div className="  xl:w-1/4 w-full md:w-2/5 shadow-xl bg-black text-white flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Yearly Subscription
          </h2>
          <p className="text-center text-4xl font-bold text-[#00DDC3]">$250</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8"> Interactive Team</p>
            <p className="py-2 border-b mx-8">Live Updates</p>
            <p className="py-2 border-b mx-8">Weekly QnA Sessions</p>
            <p className="py-2 border-b mx-8">
              Access to Yearly Premium Channel
            </p>
          </div>
          <button className="bg-[#00DDC3] hover:bg-white hover:text-black text-white  w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Join Now
          </button>
        </div>
        <div className=" bg-black w-full md:w-2/5 xl:w-1/4  text-white   shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            6 Months Subscription
          </h2>
          <p className="text-center text-4xl font-bold text-[#00DDC3]">$150</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Interactive Team</p>
            <p className="py-2 border-b mx-8">Live Updates</p>
            <p className="py-2 border-b mx-8">Weekly QnA Sessions</p>
          </div>
          <button className=" bg-[#00DDC3] w-[200px] hover:text-black hover:bg-white text-white rounded-md font-medium my-6 mx-auto px-6 py-3">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
