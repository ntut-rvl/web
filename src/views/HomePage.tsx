import React from 'react';
import About from '../components/About';
import Professor from '../components/Professor';
import Research from '../components/Research';
import Course from '../components/Course';
import Bulletin from '../components/Bulletin';
import Contact from '../components/Contact';
import Project from '../components/Project';

const HomePage: React.FC = () => {
    return (
        <>
            <About />
            <Professor />
            <Research />
            <Project />
            <Course />
            <Bulletin />
            <Contact />
        </>
    )
}

export default HomePage;
