import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { useAnimateOnScroll } from '../Utils';

const Bulletin: React.FC = () => {
    const onScrollEl = useAnimateOnScroll();
    return (
        <section className="rvl-section rvl-bg-gray rvl-slant rvl-slant-white text-center" id="bulletin">
            <div className="container">
                <div 
                    ref={onScrollEl}
                    className="row rvl-animate mb-4"
                    data-animate-effect="fadeIn"
                >
                <div className="col-12">
                    <h2 className="rvl-uppercase mb-0">Bulletin</h2>
                </div>
                <div className="col-12">
                    <h5>公告</h5>
                </div>
            </div>
            <div className="row">
                <div 
                    ref={onScrollEl}
                    className="col-md-4 col-sm-6 col-9 mb-4 mx-auto rvl-animate"
                    data-animate-effect="fadeIn"
                >
                    <Link to="/bulletin" className="rvl-block rvl-block-btn p-sm-5 p-4">
                        <FontAwesomeIcon icon={faTable} className="rvl-icon fa-4x mb-3" />
                        <p className="lead">Meeting Records</p>
                    </Link>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Bulletin;
