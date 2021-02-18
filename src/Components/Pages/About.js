import React from "react";
import "../../About.css";
import image1 from "../../images/Michelle.JPG";
import Footer from '../Footer';

function Cards() {
  return (
    <React.Fragment>
<section class = "section-header-spacing-display">
  <div class = "content-container v-parent">
    <div class = "row row-1-2">
      <div class = "col v-children">
          <img class = "block-responsive image-style-rounded" src = {image1}/>
      </div>
      <div class = "col">
        <div>
          <p className = "aboutTitle col">About Me</p>
          <br></br>
          <p class = "aboutText"> Hi, my name is Michelle and I am a Management Engineering student
              at the University of Waterloo. I'm passionate about product
              management and leveraging new technologies to create innovative
              projects!
          </p>
          <br></br>
          <p class = "aboutText">
            Currently, I am at the Economical Insurance Group as a project
            coordinator. I am constantly looking for ways to learn more
            about web & software development!
          </p>
          <br></br>
          <p class = "aboutText">
            In my spare time, I enjoy reading, knitting, and discovering
            new music.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<div className = "footer-absolute">
<Footer/>
</div>
</React.Fragment>
  );
}

export default Cards;
