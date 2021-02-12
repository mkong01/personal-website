import React from "react";
import "../../App.css";
import image1 from "/Users/michellekong/my-app/src/images/Michelle1.JPG"

export default function About() {
  return (
    <h1 className="About">
      <div>About</div>
      <div className="aboutText">
        Hi, my name is Michelle and I am a Management Engineering student at the
        University of Waterloo. I'm passionate about product management and
        leveraging new technologies to create innovative projects!
        <div className="aboutTextSkip">
          Currently, I am at the Economical Insurance Group as a project
          coordinator. I am constantly looking for ways to learn more about web
          & software development!
          <div className="aboutTextSkip">
            In my spare time, I enjoy reading,knitting, and discovering new music.
            <img className = "image1" src = {image1} width = "375" height = "540" />
          </div>
        </div>
      </div>
    </h1>
  );
}
