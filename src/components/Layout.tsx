import React from 'react';
import Home from '../components/Home';
import RvlNavbar from '../components/RvlNavbar';
import Footer from '../components/Footer';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <RvlNavbar />
            <Home />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;

