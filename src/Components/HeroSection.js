import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>Hey there, I'm Michelle!</h1>
      <div class="container">
        <h2>
          I'm a
          {/* <span
            class="txt-type"
            data-wait="3000"
            data-words='["Management Engineer", "Project Coordinator", "Continuous Learner", "Knitting Enthusiast"]'
          > */}
            {/* after the typewriter is done typing, it will wait 3000 milliseconds before going onto the next word*/}
          {/* </span> */}
        </h2>
      </div>
      {/* <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button> */}
        {/* <Button
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
