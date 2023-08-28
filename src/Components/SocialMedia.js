import React, { useRef, useEffect, useState } from "react";
import discord from "../assets/discord.png";
import Facebook from "../assets/facebook_733547.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube_4494485.png";
import instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";
import tiktok from "../assets/tiktok.png";

const SocialMedia = () => {
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
  }, []);

  return (
    <div
      ref={componentRef}
      className={`${
        showComponent
          ? " ease-in-out duration-1000"
          : "opacity-0 translate-y-10"
      } transition-all px-2 `}
    >
      <div className="w-full my-[8rem] px-4 bg-transparent " id="SocialMedia">
        <div className=" sm:w-4/5 sm:mx-auto md:flex-row flex flex-col ">
          <div className="w-full p-3 shadow-xl flex flex-col   hover:text-white hover:scale-105  rounded-lg transition-transform duration-1000">
            <p className="text-2xl sm:text-5xl font-bold text-white  ">
              {" "}
              Social Media
            </p>
            <p className="text-lg sm:text-2xl text-white font-bolds mt-[0.7rem] ">
              {" "}
              Join our Social Communities to grow with{" "}
              <span className="text-[#00DDC3]">Traders Hub</span>
            </p>
          </div>

          <div className="bg-none my-10 w-full  flex flex-row md:flex-wrap xl:flex-nowrap  hover:scale-105  rounded-lg transition-transform duration-1000">
            <a href="https://www.youtube.com/channel/UChj1JI07oSrkHkMHShKQZwQ/videos?view=0">
              <img
                className="w-10 h-10 sm:w-16 sm:h-16 mx-4 sm:hover:scale-110 sm:hover:cursor-pointer"
                src={youtube}
                alt="yt"
              />
            </a>
            <a href="https://web.facebook.com/groups/1374901829627743/">
              <img
                className="w-10 h-10 sm:w-16 sm:h-16 mx-4 sm:hover:scale-110 sm:hover:cursor-pointer"
                src={Facebook}
                alt="fb"
              />
            </a>
            <a href="https://discord.gg/Ww6BQSuu">
              <img
                className="w-10 h-10 sm:w-16 sm:h-16 mx-4 sm:hover:scale-110 sm:hover:cursor-pointer"
                src={discord}
                alt="dc"
              />
            </a>
            <a href="">
              <img
                className="w-10 h-10 sm:w-16 sm:h-16 mx-4 md:mt-4 mt-0 xl:mt-0 sm:hover:scale-110 sm:hover:cursor-pointer"
                src={Twitter}
                alt="TWiter"
              />
            </a>
            <a href="https://www.linkedin.com/in/mehran-khan-23584b22b/?originalSubdomain=pk">
              <img
                className="w-10 h-10 sm:w-16 sm:h-16 mx-4 md:mt-4 mt-0 xl:mt-0 sm:hover:scale-110 sm:hover:cursor-pointer"
                src={linkedin}
                alt="in"
              />
            </a>
            <a href="">
              <img
                className="w-10 h-10 sm:w-16 sm:h-16 mx-4 md:mt-4 mt-0 xl:mt-0 sm:hover:scale-110 sm:hover:cursor-pointer"
                src={instagram}
                alt="ig"
              />
            </a>
            <a href="">
              <img
                className="w-10 h-10 sm:w-16 sm:h-16 mx-4 md:mt-4 mt-0 xl:mt-0 sm:hover:scale-110 sm:hover:cursor-pointer"
                src={tiktok}
                alt="ig"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
