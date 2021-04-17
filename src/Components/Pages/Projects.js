import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import '../Footer.css';
import ProjectCards from '../ProjectCards';

export default function Projects() {
  return (
    <React.Fragment>
      <>
        <ProjectCards />
        <div class="footer-project">
          <Footer />
        </div>
      </>
    </React.Fragment>
  );
}