import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fadatabase } from '@fortawesome/free-solid-svg-icons';
import { useAnimateOnScroll } from '../Utils';

const DatasetArea: React.FC<{ icon: any; title: string; description: string; link: string; onScrollEl: any; }> = ({ icon, title, description, link, onScrollEl}) => (
    <div 
        ref={onScrollEl}
        className="col-lg-4 col-sm-6 col-10 mb-4 mx-auto rvl-animate"
        data-animate-effect="fadeIn"
    >
        <Link to={link} className="rvl-block rvl-block-research rvl-block-btn p-sm-5 p-4">
            <FontAwesomeIcon icon={icon} className="rvl-icon fa-4x mb-3" />
            <p className="lead mb-4">{title}</p>
            <p>{description}</p>
        </Link>
    </div>
);

const Dataset: React.FC = () => {
    const onScrollEl = useAnimateOnScroll();
    return (
    <section className="rvl-section rvl-bg-gray rvl-slant rvl-slant-white text-center" id="research">
      <div className="container">
        <div 
            ref={onScrollEl}
            className="row rvl-animate mb-4"
            data-animate-effect="fadeIn"
        >
          <div className="col-12">
            <h2 className="rvl-uppercase mb-0">Dataset</h2>
          </div>
          <div className="col-12">
            <h5>資料集</h5>
          </div>
        </div>
        <div className="row">
            <div 
                ref={onScrollEl}
                className="col-lg-4 col-sm-6 col-10 mb-4 mx-auto rvl-animate"
                data-animate-effect="fadeIn"
            >
                <a 
                    href="https://vision.ee.ccu.edu.tw/aerialimage_web/index.html" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="rvl-block rvl-block-research rvl-block-btn p-sm-5 p-4"
                >
                    <FontAwesomeIcon icon={fadatabase} className="rvl-icon fa-4x mb-3" />
                    <p className="lead mb-4">VAID (Vehicle Aerial Imaging from Drone)</p>
                    <p>用於航拍影像中車輛偵測的資料集，包含來自台灣不同地區的 5985 張 RGB 航拍影像。</p>
                </a>
            </div>
            <DatasetArea
                icon={fadatabase}
                title="UAV Taipei"
                description="用於無人機戶外視覺定位資料集，來自台灣台北地區包含無人機以及衛星影像。"
                link="/dataset_UAV_Taipei"
                onScrollEl={onScrollEl}
            />
        </div>
      </div>
    </section>
  );
};

export default Dataset;
