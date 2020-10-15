import React from 'react';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import Services from '../Services/Services';
import WorkCarousel from '../WorkCarousel/WorkCarousel';

const Home = () => {
    return (
        <div>
            <Header />
            <Logo />
            <Services />
            <WorkCarousel />
            <Feedback />
            <Footer />
        </div>
    );
};

export default Home;