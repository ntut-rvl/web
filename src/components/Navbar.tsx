import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return (
        <nav className="navbar navbar-expand-lg navbar-light rvl-navbar-light rvl_navbar" id="navbar">
            <div className="container">
                {
                    isHomePage
                    ? <a className="navbar-brand rvl-scroll" href="#home">機器人視覺實驗室</a>
                    : <Link to="/" className="navbar-brand rvl-scroll">機器人視覺實驗室</Link>
                }
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#rvl-nav" aria-controls="rvl-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                </button>
                <div className="navbar-collapse collapse" id="rvl-nav">
                    {
                        isHomePage
                        ? <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a href="#about" className="nav-link">關於我們</a></li>
                            <li className="nav-item"><a href="#professor" className="nav-link">指導教授</a></li>
                            <li className="nav-item"><a href="#research" className="nav-link">研究領域</a></li>
                            <li className="nav-item"><a href="#course" className="nav-link">課程資訊</a></li>
                            <li className="nav-item"><a href="#bulletin" className="nav-link">公告</a></li>
                            <li className="nav-item"><a href="#contact" className="nav-link">聯絡方式</a></li>
                        </ul>
                        : <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">回首頁</Link>
                            </li>
                        </ul>
                    } 
                </div>
            </div>
        </nav>
  );
};

export default Navbar;
