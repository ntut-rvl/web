import React from 'react';
import { useAnimateOnScroll } from '../Utils';
import ProfessorImg from '../assets/images/professor.jpg'

const Professor: React.FC = () => {
    const onScrollEl = useAnimateOnScroll();
    return (
    <section className="rvl-section rvl-slant rvl-slant-gray text-center" id="professor">
      <div className="container">
        <div 
            ref={onScrollEl}
            className="row rvl-animate mb-5"
            data-animate-effect="fadeIn"
        >
          <div className="col-12">
            <h2 className="rvl-uppercase mb-0">Professor</h2>
          </div>
          <div className="col-12 mb-4">
            <h5>指導教授</h5>
          </div>
        </div>
        <div 
            ref={onScrollEl}
            className="row rvl-animate"
            data-animate-effect="fadeIn"
        >
          <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 col-12 mx-auto">
            <div className="rvl-block rvl-block-light p-5">
              <img className="rvl-avatar mb-4" src={ProfessorImg} height="150" width="150" alt="Professor" />
              <p className="rvl-avatar-name mb-0">林惠勇</p> 
              <p className="rvl-avatar-name">Huei-Yung Lin</p>
              <p className="mb-0">Department of Electrical Engineering</p>
              <p className="mb-0">National Chung Cheng University</p>
              <p>Chiayi 621, Taiwan</p>
              <a href="hueiyung" className="btn btn-primary mt-3">了解更多</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professor;
