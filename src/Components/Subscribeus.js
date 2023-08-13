import React, { useRef, useEffect, useState } from "react";
import discord from "../assets/discord.png";
import Facebook from "../assets/facebook_733547.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube_4494485.png";
import instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";


const SubscribeUS = () => {

  const componentRef = useRef();
  const [showComponent, setShowComponent] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const element = componentRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight) {
        setShowComponent(true);
      } else {
        setShowComponent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  return (
    <div  ref={componentRef}
    className={`${
      showComponent
        ? " -mt-28 ease-in-out duration-1000"
        : "opacity-0 translate-y-10"
    } transition-all px-2 `}>

    <div className="w-full py-[8rem] px-4 bg-transparent " id="cards">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12">
        <div className="w-full shadow-xl flex flex-col    rounded-lg transition-transform duration-1000">
          <p className="text-5xl font-bold text-white  ">Subscribe</p>
          <p className="text-2xl text-white font-bolds mt-[0.7rem] ">
            {" "}
            Subscribe Our YouTube Channel for Live Bitcoin Technical Analysis in Urdu Hindi
          </p>
        </div>

        <div className="bg-none my-10 w-full shadow-xl flex flex-row   hover:scale-105  rounded-lg transition-transform duration-1000">
          <a href="https://www.youtube.com/channel/UChj1JI07oSrkHkMHShKQZwQ/videos?view=0">
            <img
              className="w-16 h-16 mx-4 hover:scale-110  hover:cursor-pointer"
              src={youtube}
              alt="yt"
            />
          </a>
          <a href="https://web.facebook.com/groups/1374901829627743/">
            <img
              className="w-16 h-16 mx-4 hover:scale-110 hover:cursor-pointer"
              src={Facebook}
              alt="fb"
            />
          </a>
    
        </div>
      </div>
    </div>
    </div>
  );
};

export default SubscribeUS;
