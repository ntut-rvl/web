import React from 'react';
import { Link } from 'react-router-dom';
import CoursePlaceholder1 from '../assets/images/course_placeholder_1.jpg'
import CoursePlaceholder2 from '../assets/images/course_placeholder_2.jpg'
import CoursePlaceholder3 from '../assets/images/course_placeholder_3.jpg'
import { useAnimateOnScroll } from '../Utils';

const CourseItem: React.FC<{ title: string; description: string; image: string; link?: string; onScrollEl: any; }> = ({ title, description, image, link, onScrollEl }) => (
    <div className="row mb-5">
        <div 
            ref={onScrollEl}
            className="col-10 rvl-block rvl-block-light p-sm-5 p-4 rvl-animate mx-auto"
            data-animate-effect="fadeIn"
        >
            <div className="row">
                <div className="col-md-6">
                    <img src={image} className="img-fluid rounded mb-3" alt={title} />
                </div>
                <div className="col-md-6">
                    <p className="rvl-block-title mb-4">{title}</p>
                    <p>{description}</p>
                    {link && <Link to={link} className="btn btn-primary mt-3">
                        了解更多
                    </Link>}
                </div>
            </div>
        </div>
    </div>
);

const Course: React.FC = () => {
    const onScrollEl = useAnimateOnScroll();
    return (
    <section className="rvl-section rvl-slant rvl-slant-gray" id="course">
      <div className="container">
        <div 
            ref={onScrollEl}
            className="row rvl-animate mb-4 text-center"
            data-animate-effect="fadeIn"
        >
          <div className="col-12">
            <h2 className="rvl-uppercase mb-0">Course</h2>
          </div>
          <div className="col-12">
            <h5>課程資訊</h5>
          </div>
        </div>
        <CourseItem
          title="Computer Vision"
          description="The aims of this course are to provide an understanding of the fundamentals of Computer Vision and to give a glimpse in the state-of-the-art, at a moment when the field is achieving &quot;critical mass&quot; and has started having significant commercial applications."
          image={CoursePlaceholder1}
          onScrollEl={onScrollEl}
        />
        <CourseItem
          title="Differential Equations"
          description="This course is a study of Ordinary Differential Equations (ODE's) and Boundary Value Problems."
          image={CoursePlaceholder2}
          link="course/differential_equations"
          onScrollEl={onScrollEl}
        />
        <CourseItem
          title="Multiple View Geometry"
          description=""
          image={CoursePlaceholder3}
          link="course/multiple_view_geometry"
          onScrollEl={onScrollEl}
        />
      </div>
    </section>
  );
};

export default Course;
