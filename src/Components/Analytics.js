import React, { useRef, useEffect, useState } from "react";
import btc from "../assets/btc.png";
import eth from "../assets/etherium.png";
const Analytics = () => {
  const analyticsRef = useRef();
  const [showAnalytics, setShowAnalytics] = useState(false);

  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const [ethereumPrice, setEthereumPrice] = useState(null);
  const [bitcoinChange, setBitcoinChange] = useState(null);
  const [ethereumChange, setEthereumChange] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true"
        );
        const data = await response.json();
        setBitcoinPrice(data.bitcoin.usd);
        setEthereumPrice(data.ethereum.usd);
        setBitcoinChange(data.bitcoin.usd_24h_change);
        setEthereumChange(data.ethereum.usd_24h_change);
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    };

    fetchPrices();
  }, []);

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
    <div id="Analytics"
      ref={analyticsRef}
      className={`${
        showAnalytics
          ? " -mt-28 ease-in-out duration-1000"
          : "opacity-0 translate-y-10"
      } mt-36  transition-all px-2 md:ml-52 `}
    >
      {/* <div className="flex justify-center items-center ">
        <p className="text-purple-600 font-semibold text-6xl text-center ">Market</p>
      </div> */}
      <div className=" justify-center   grid  md:grid-cols-2">
        <img
          className="bg-transparent md:ml-4"
          src="https://assets.bitdegree.org/fear-and-greed-index/current.png"
          alt="Bit"
        />
        <div className="px-4 flex flex-col justify-center space-y-8 pt-20">
          <h1 className="md:text-5xl sm:text-4xl text-5xl font-bold top-0 text-white md:mt-0  text-center sm:text-left ">
            Live Coin Price
          </h1>

          <div className="flex-row ml-36 sm:ml-20 ">
            <div className="flex items-center">
              <img className="w-14" src={btc} alt="b" />
              <p className="text-white ml-2">Bitcoin</p>
            </div>
            <div className="flex items-center ml-auto">
              <p className="text-white text-5xl font-bold">{bitcoinPrice}</p>
              {bitcoinChange !== null && (
                <p className="text-white ml-2 ">{bitcoinChange.toFixed(3)}%</p>
              )}
            </div>
          </div>
          <div className=" mt-96 flex-row ml-36 sm:ml-20 ">
            <div className="flex items-center">
              <img className="w-14" src={eth} alt="e" />
              <p className="text-white ml-2">Etherium</p>
            </div>
            <div className="flex items-center ml-auto">
              <p className="text-white text-5xl font-bold">{ethereumPrice}</p>
              {ethereumChange !== null && (
                <p className="text-white ml-2 ">{ethereumChange.toFixed(3)}%</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
