import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="mb-0">國立臺北科技大學 機器人視覺實驗室</p>
            <p>&copy; {new Date().getFullYear()} Robot Vision Lab</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
