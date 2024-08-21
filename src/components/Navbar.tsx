import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light rvl-navbar-light rvl_navbar" id="navbar">
      <div className="container">
        <a className="navbar-brand rvl-scroll" href="#home">機器人視覺實驗室</a>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#rvl-nav" aria-controls="rvl-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="icon-bar top-bar"></span>
          <span className="icon-bar middle-bar"></span>
          <span className="icon-bar bottom-bar"></span>
        </button>
        <div className="navbar-collapse collapse" id="rvl-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a href="#about" className="nav-link">關於我們</a></li>
            <li className="nav-item"><a href="#professor" className="nav-link">指導教授</a></li>
            <li className="nav-item"><a href="#research" className="nav-link">研究領域</a></li>
            <li className="nav-item"><a href="#course" className="nav-link">課程資訊</a></li>
            <li className="nav-item"><a href="#bulletin" className="nav-link">公告</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">聯絡方式</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
