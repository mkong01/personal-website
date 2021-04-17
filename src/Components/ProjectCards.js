import React from "react";
import "./ProjectCards.css";
import music_player_pic from '../images/music_player.png'
import snapshoot_pic from "../images/snapshoot.png";
import games_galore_pic from "../images/games_galore.png"

function ProjectCards() {
  return (
    <div className="row">
      <div className="card">
        <div className="image">
          <img class="book-image" src={music_player_pic}></img>
        </div>

        <div className="data">
          <div className="content">
            <h1 className="cardTitle">Music Player </h1>
            <h3 class="font">Created with React</h3>
            <p className="text">
              This is an aesthetic music player app that allows users to listen
              to music loaded on the database.
            </p>
          </div>
        </div>
      </div>

      {/* second card */}
      <div className="card">
        <div className="image">
          <img class="book-image" src={snapshoot_pic}></img>
        </div>

        <div className="data">
          <div className="content">
            <h1 className="cardTitle">Snapshoot Website</h1>
            <h3 class="font">Created with React</h3>
            <p className="text">
              This fully animated & responsive website provides information on
              the Snapshoot company and the different services they offer. Under
              the 'Our Work' tab, it shows the various works in detail produced
              by the company.
            </p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img class="book-image" src={games_galore_pic}></img>
        </div>

        <div className="data">
          <div className="content">
            <h1 className="cardTitle">Games Information Site</h1>
            <h3 class="font">Created with React</h3>
            <p className="text">
              This website uses an external API and it provides information on
              upcoming, popular, and new games. In addition, it outputs more
              data when clicked upon such as the rating, the different
              platform(s) available, and a summary & pictures of the game.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
