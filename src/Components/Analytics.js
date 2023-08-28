import React, { useRef, useEffect, useState } from "react";
import btc from "../assets/btc.png";
import eth from "../assets/etherium.png";
const Analytics = () => {
  const analyticsRef = useRef();
  const [showAnalytics, setShowAnalytics] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = analyticsRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight) {
        setShowAnalytics(true);
      } else {
        setShowAnalytics(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="Analytics"
      ref={analyticsRef}
      className={`${
        showAnalytics
          ? " -mt-28 ease-in-out duration-1000"
          : "opacity-0 translate-y-10"
      } sm:mt-36 mt-24  transition-all px-2   `}
    >
      <div className="flex flex-col sm:flex-row justify-around w-[100%]">
        <div className="v">
          <p className="text-white  text-4xl font-bold mb-6  ">
            A Platform With Vison
          </p>
          <p className="text-7xl ml-4 text-white">4000+</p>
          <p className="text-3xl ml-4 text-white">Active Members</p>
          <p className="text-7xl ml-4 text-white">141+</p>
          <p className="text-3xl ml-4 text-white">Students From Batch</p>
          <p className="text-7xl ml-4 text-white">100+</p>
          <p className="text-3xl ml-4 text-white">Mentorships</p>
        </div>

        <div className="py-2 sm:w-1/4">
          <div>
            <p className="text-white text-2xl font-bold">Our Community</p>
            <p className="text-white text-[17px] p-2 ">
              Traders Hub is a platform where you can have the best knowledge
              about financial markets.
            </p>
          </div>
          <div>
            <p className="text-white text-2xl mt-6 font-bold">Our Vision</p>
            <p className="text-white text-[17px]  p-2 ">
              Traders Hub is a platform where you can have the best knowledge
              about financial markets.
            </p>
          </div>
        </div>
        <div className="sm:w-1/4">
          <div>
            <p className="text-white text-2xl font-bold">Interactive</p>
            <p className="text-white text-[17px]   p-2 ">
              You can interact with the whole community in our spam free
              ecosystem, you can learn alot by discussing things.
            </p>
          </div>
          <div>
            <p className="text-white text-2xl mt-6 font-bold">Benefits</p>
            <p className="text-white text-[17px]  p-2 ">
              By joining our community you will learn The Most important
              concepts in trading industry & as we say the goal is to make you
              independent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
