import React from 'react';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Navbar />
            <Home />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;

