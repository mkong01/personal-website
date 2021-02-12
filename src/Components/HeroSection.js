import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import Typewriter from "typewriter-effect";


function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>Hey there, I'm Michelle!</h1>
      <p>Welcome to my website. </p>
    </div>
  );
}

export default HeroSection;
