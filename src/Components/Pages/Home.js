import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
// import Typewriter from '../Typewriter';

function Home () {
    return (
        <>
        <HeroSection />
        {/* <Typewriter /> */}
        <Cards />
        <Footer />
        </>   
    );
}

export default Home;