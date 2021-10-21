import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import AboutMe from '../AboutMe';

function Home (){
    return(
        <>
        <HeroSection/>
        <Cards/>
        <AboutMe/>
        <Footer/>
        </>
    )
    
}

export default Home;