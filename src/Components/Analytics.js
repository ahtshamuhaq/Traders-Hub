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
      } sm:mt-36 mt-24  transition-all px-2 sm:ml-36  `}
    >
      <div className="flex flex-row justify-between w-[100%]">
        <p className="text-white  text-4xl font-bold ">A Platform With Vison</p>

        <div className="py-2">
          <div>
            <p className="text-white text-2xl font-bold">Our Community</p>
            <p className="text-white text-[17px]  w-1/2 p-2 ">
              Traders Hub is a platform where you can have the best knowledge
              about financial markets.
            </p>
          </div>
          <div>
            <p className="text-white text-2xl font-bold">Our Vision</p>
            <p className="text-white text-[17px]  w-1/2 p-2 ">
              Traders Hub is a platform where you can have the best knowledge
              about financial markets.
            </p>
          </div>
        </div>
        <div>
          <div>
            <p className="text-white text-2xl font-bold">Interactive</p>
            <p className="text-white text-[17px]  w-1/2 p-2 ">
              You can interact with the whole community in our spam free
              ecosystem, you can learn alot by discussing things.
            </p>
          </div>
          <div>
            <p className="text-white text-2xl font-bold">Benefits</p>
            <p className="text-white text-[17px]  w-1/2 p-2 ">
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
