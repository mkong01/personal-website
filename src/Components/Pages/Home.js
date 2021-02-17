import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';


function Home () {
    return (
        <React.Fragment>
        <>
        <HeroSection />
        <Cards />
        <div className = "footer-home">
        <Footer />
        </div>
        </> 
        </React.Fragment>  
    );
}

export default Home;