import React from 'react';
import About from '../components/About';
import Professor from '../components/Professor';
import Research from '../components/Research';
import Course from '../components/Course';
import Bulletin from '../components/Bulletin';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
    return (
        <>
            <About />
            <Professor />
            <Research />
            <Course />
            <Bulletin />
            <Contact />
        </>
    )
}

export default HomePage;
