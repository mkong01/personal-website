import React from "react";
import "../../About.css";
import image1 from "../../images/Michelle.JPG";
import Footer from '../Footer';

function Cards() {
  return (
    <React.Fragment>
      <div class="About">
        <div class="Image">
          <img class="block-responsive image-style-rounded" src={image1} />
        </div>
        <div class="Description">
          <p class="Text">About Me
          <br></br>
          <p>
            Hi, my name is Michelle and I am a Management Engineering student at
            the University of Waterloo. I'm passionate about project / product management,
            and leveraging new technologies to create innovative projects!
          </p>
          <br></br>
          <p>
            During my previous coop, I was at the Economical Insurance Group as
            a project coordinator. I am very interested in gaining experience in the tech industry, 
            thus I am constantly looking for ways to learn more about web & software development.
          </p>
          <br></br>
          <p>
            In my spare time, I enjoy reading 📚, knitting 🧶, and discovering new music 🎶.
          </p>
          </p>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Cards;
