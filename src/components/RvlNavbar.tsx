import React from 'react';
// import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const RvlNavbar: React.FC = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar navbar-expand-lg navbar-light rvl-navbar-light rvl_navbar" id="navbar">
            <Container>
                <Navbar.Brand href="#home">機器人視覺實驗室</Navbar.Brand>
                <Navbar.Toggle aria-controls="rvl-nav" >
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                </Navbar.Toggle>

                <Navbar.Collapse className="navbar-collapse collapse" id="rvl-nav">
                    {
                        isHomePage
                        ? 
                    <Nav className="navbar-nav ms-auto">
                        <Nav.Link href="#about">關於我們</Nav.Link>
                        <Nav.Link href="#professor">指導教授</Nav.Link>
                        <Nav.Link href="#research">研究領域</Nav.Link>
                        <Nav.Link href="#course">課程資訊</Nav.Link>
                        <Nav.Link href="#bulletin">公告</Nav.Link>
                        <Nav.Link href="#contact">聯絡方式</Nav.Link>
                    </Nav>
                        :
                    <Nav className="navbar-nav ms-auto">
                        <Nav.Link href="/web">回首頁</Nav.Link>
                    </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
  );
};

export default RvlNavbar;
