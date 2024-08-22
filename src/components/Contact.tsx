import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { useAnimateOnScroll } from '../Utils';

const Contact: React.FC = () => {
    const onScrollEl = useAnimateOnScroll();
    return (
    <section className="rvl-section rvl-pre-footer" id="contact">
      <div className="container">
        <div 
            ref={onScrollEl}
            className="row rvl-animate mb-4 text-center"
            data-animate-effect="fadeIn"
        >
          <div className="col-12">
            <h2 className="rvl-uppercase mb-0">Contact</h2>
          </div>
          <div className="col-12">
            <h5>聯絡方式</h5>
          </div>
        </div>
        <div 
            ref={onScrollEl}
            className="row rvl-animate"
            data-animate-effect="fadeIn"
        >
          <div className="col-xl-5 col-lg-6 col-12">
            <ul className="fa-ul">
              <li>
                <span className="fa-li"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                621 嘉義縣民雄鄉大學路一段168號<br/>工學院一館 122實驗室
              </li>
              <li>
                <span className="fa-li"><FontAwesomeIcon icon={faPhone} /></span>
                05-2720411 #23274
              </li>
              <li>
                <span className="fa-li"><FontAwesomeIcon icon={faGlobeAmericas} /></span>
                <a href="http://vision.ee.ccu.edu.tw">vision.ee.ccu.edu.tw</a>
              </li>
            </ul>
          </div>
          <div className="col-xl-7 col-lg-6 col-12">
            <iframe 
              id="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.177161296943!2d120.47528971478805!3d23.562079884682582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346ebe54383b0609%3A0xae2c06187f9954d4!2z5bel5a246Zmi5LiA6aSo!5e0!3m2!1szh-TW!2stw!4v1535190558857"
              width="100%"
              height="450"
              frameBorder="0"
              allowFullScreen
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
