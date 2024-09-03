import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFile, faLayerGroup, faRobot, faCar, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useAnimateOnScroll } from '../Utils';

const ResearchArea: React.FC<{ icon: any; title: string; description: string; link: string; onScrollEl: any; }> = ({ icon, title, description, link, onScrollEl}) => (
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

const Research: React.FC = () => {
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
            <h2 className="rvl-uppercase mb-0">Research</h2>
          </div>
          <div className="col-12">
            <h5>研究領域</h5>
          </div>
        </div>
        <div className="row">
          <ResearchArea
            icon={faEye}
            title="Robot Vision System"
            description="電腦視覺（CV）及機器人視覺（RV）相關演算法的開發及實現"
            link="/research/rvs"
            onScrollEl={onScrollEl}
          />
          <ResearchArea
            icon={faFile}
            title="Document Image Analysis"
            description="文件影像處理與分析"
            link="research/document_image_analysis.html"
            onScrollEl={onScrollEl}
          />
          <ResearchArea
            icon={faLayerGroup}
            title="3D Model Reconstruction and Depth Estimation"
            description="影像與三維資訊於混合實境（MR）與擴增實境（AR）之應用"
            link="research/reconstruction.html"
            onScrollEl={onScrollEl}
          />
          <ResearchArea
            icon={faRobot}
            title="Environment Surveillance and Object Tracking"
            description="運用於環境監控、人機互動與行動機器人（MR）之視覺系統的建構"
            link="research/surveillance.html"
            onScrollEl={onScrollEl}
          />
          <ResearchArea
            icon={faCar}
            title="Intelligence Transportation System"
            description="智慧型運輸系統（ITS）及智慧型車輛（IV）之視覺系統建置"
            link="research/intelligence_transportation_system.html"
            onScrollEl={onScrollEl}
          />
          <ResearchArea
            icon={faSearch}
            title="Computer Graphics and Visualization"
            description="電腦視覺於三維檢測、智慧製造及工業 4.0 之應用"
            link="research/computer_graphics_and_visualization.html"
            onScrollEl={onScrollEl}
          />
        </div>
      </div>
    </section>
  );
};

export default Research;
