import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import Typewriter from "./Typewriter";

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["hard", "fun", "a journey", "LIFE"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>Hey there, I'm Michelle!</h1>
      <div class="container">
        {/* <h2> */}
        {/* I'm a */}
        {/* <span
            class="txt-type"
            data-wait="3000"
            data-words='["Management Engineer", "Project Coordinator", "Continuous Learner", "Knitting Enthusiast"]'
          > */}
        {/* after the typewriter is done typing, it will wait 3000 milliseconds before going onto the next word*/}
        {/* </span> */}
        {/* </h2> */}
        <h2>
          I'm a<span class="typed-text"> Management Engineer</span>
          <span class="cursor">&nbsp;</span>
          {/* &nbsp == allows to show the cursor */}
        </h2>
      </div>
      {/* <script src = "Typewriter.js"></script> */}
      {/* <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div> */}
    </div>

    
  );
}

export default HeroSection;
