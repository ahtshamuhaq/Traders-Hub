import React, { useEffect, useState, useRef } from "react";

const YouTubeLastPostedVideo = () => {
  const [videoInfo, setVideoInfo] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  const videoRef = useRef();
  const CHANNEL_ID = "UChj1JI07oSrkHkMHShKQZwQ"; // Replace with your YouTube channel ID
  const API_KEY = "AIzaSyChWcDiJKsg3PNHmQPNaEReuzRjdE-7bOU"; // Replace with your YouTube API key

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=1`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.items.length > 0) {
          const video = data.items[0];
          setVideoInfo({
            title: video.snippet.title,
            videoId: video.id.videoId,
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = videoRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight) {
          setShowVideo(true);
        } else {
          setShowVideo(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!videoInfo) {
    return <p className="text-white">Loading...</p>;
  }

  return (
    <div
      ref={videoRef}
      className={`${
        showVideo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } transition-all duration-1000  justify-center items-center h-screen my-56  hidden sm:flex`}
    >
      <div className="">
        <div className="max-w-[1200px]">
          <h1 className="text-6xl font-bold mb-4 text-white text-center">
            {videoInfo.title}
          </h1>
          <iframe
            className="w-[1000px] h-[500px] items-center ml-24 mt-14"
            src={`https://www.youtube.com/embed/${videoInfo.videoId}`}
            frameBorder="0"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YouTubeLastPostedVideo;
