import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { useAnimateOnScroll, Member, PastMember } from '../Utils';
import PastMemberData from '../assets/past_members.json';
import MemberData from '../assets/members.json';

type Members = Member[];
type FormerMembers = PastMember[];

const About: React.FC = () => {
    const onScrollEl = useAnimateOnScroll();

    const [members, setMembers] = useState<Members | null>(null);
    useEffect(() => {
        setMembers(MemberData.data);
    }, []);
    const numMembers = members ? members.length : 0;

    const [formerMembers, setFormerMembers] = useState<FormerMembers | null>(null);
    useEffect(() => {
        setFormerMembers(PastMemberData);
    }, []);
    const numFormerMembers = formerMembers ? formerMembers.length : 0;

    return (
    <section className="rvl-section rvl-bg-gray rvl-slant rvl-slant-white text-center" id="about">
      <div className="container">
        <div 
            ref={onScrollEl}
            className="row rvl-animate mb-4"
            data-animate-effect="fadeIn"
        >
          <div className="col-12">
            <h2 className="rvl-uppercase mb-0">About</h2>
          </div>
          <div className="col-12">
            <h5>關於我們</h5>
          </div>
        </div>
        <div 
            ref={onScrollEl}
            className="row rvl-animate"
            data-animate-effect="fadeIn"
        >
          <div className="col-12 mb-5">
            <p className="lead mb-1">「機器人視覺實驗室」隸屬於國立臺北科技大學資訊工程研究所</p>
            <p className="lead">歡迎具電機、資訊相關背景的同學加入我們的研究行列</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div 
                ref={onScrollEl}
                className="col-lg-4 col-md-5 col-sm-6 col-8 mb-4 rvl-animate"
                data-animate-effect="fadeIn"
          >
            <Link to="/member" className="rvl-block rvl-block-btn p-sm-5 p-4">
              <FontAwesomeIcon icon={faUser} className="rvl-icon fa-4x" />
              <span className="rvl-counter mx-auto">{numMembers}</span>
              <p className="lead">Members</p>
            </Link>
          </div>
          <div 
                ref={onScrollEl}
                className="col-lg-4 col-md-10 col-sm-6 col-10 mb-4 rvl-animate"
                data-animate-effect="fadeIn"
          >
            <Link to="/past_members" className="rvl-block rvl-block-btn p-sm-5 p-4">
              <FontAwesomeIcon icon={faGraduationCap} className="rvl-icon fa-3x" />
              <span className="rvl-counter mx-auto">{numFormerMembers}</span>
              <p className="lead">Former Members</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
