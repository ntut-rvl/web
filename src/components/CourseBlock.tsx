import React from 'react';
import { useAnimateOnScroll } from '../Utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFilePdf } from '@fortawesome/free-solid-svg-icons';

interface CourseBlockProps {
    fileLink: string;
    title: string;
}

const CourseBlock: React.FC<CourseBlockProps> = ({ fileLink, title }) => {
    const onScrollEl = useAnimateOnScroll();

    return (
        <div 
            ref={onScrollEl}
            className="col-md-4 col-sm-6 col-9 mb-4 mx-auto rvl-animate text-center"
            data-animate-effect="fadeIn"
        >
            <a href={"/web/src/assets/courseFile/"+fileLink} target="_blank" className="rvl-block rvl-block-btn p-sm-5 p-4">
              <FontAwesomeIcon icon={faFilePdf} className="rvl-icon fa-4x mb-3" />
              <p className="lead">{title}</p>
            </a>
        </div>
  );
};

export default CourseBlock;
