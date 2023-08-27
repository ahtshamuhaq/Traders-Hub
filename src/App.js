import React from "react";
import Navbar from "../src/Components/Navbar.js";
import Hero from "../src/Components/Hero.js";
import Cards from "../src/Components/Cards.js";
import Analytics from "../src/Components/Analytics.js";
import Footer2 from "./Components/footer2.js";
import Priceslider from "./Components/priceslider.js";
import { useState } from "react";
import SocialMedia from "./Components/SocialMedia.js";
import YouTubeVideo from "./Components/youtube.js";

import Mentorship from "./Components/mentorship.js";

const App = () => {
  const [showAnalytics, setShowAnalytics] = useState(true);
  return (
    <div>
      <Priceslider />
      <Navbar />
      <Hero />
      <Analytics />
      <YouTubeVideo />
      <Cards />
      <Mentorship />
      <SocialMedia />
      <Footer2 />
    </div>
  );
};

export default App;
