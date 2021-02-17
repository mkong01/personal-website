import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  // click == current state , setClick == allowing us to update current state
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  // const == local variable in java; only defined within function & the value can't change

const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
      }
};

window.addEventListener('resize', showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {/* replaces a tag */}
            Michelle Kong
            {/* <i className="fab fa-typo3" /> */}
            {/* logo ^^ */}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {/* right side, hamburger menu */}
            <i className={click ? "fa fa-times" : "fa fa-bars"} />
            {/* click once -> hamburger menu, click again, bars */}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* ? == shortcut for if statement 
                if click is true, then nav-menu active, else nav-menu */}
            {/* every time you're in the nav menu and you click something inside, you want the nav menu to go away */}
            <li className="nav-item">
              {/* li == link, link to = '/' == the url at the end, class Name == formatting,
                onclick (clicking it) == when you click it, you want to exit out of the hamburger tab */}
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
