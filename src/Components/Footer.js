import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Made with ♡
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <div class='social-icons'>
            <a
              class='social-icon-link youtube'
              href = "mailto:michellekong4@gmail.com"
            ><span class = "fa fa-envelope"></span>
            </a>
            <a
              class='social-icon-link twitter'
              href = "https://github.com/mkong01"
            ><span class = "fa fa-github"></span>
            </a>
            <a
              class='social-icon-link twitter'
              href="https://www.linkedin.com/in/michellettkong/"
            ><span class = "fa fa-linkedin"></span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
