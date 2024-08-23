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
                10608台北市忠孝東路三段一號<br/>宏裕科技研究大樓 14樓 1421實驗室
              </li>
              <li>
                <span className="fa-li"><FontAwesomeIcon icon={faPhone} /></span>
                02-27712171 #4265
              </li>
              <li>
                <span className="fa-li"><FontAwesomeIcon icon={faGlobeAmericas} /></span>
                <a href="https://robustlab122.github.io/NTUT-RVL/">https://robustlab122.github.io/NTUT-RVL/</a>
              </li>
            </ul>
          </div>
          <div className="col-xl-7 col-lg-6 col-12">
            <iframe 
              id="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.7494394772175!2d121.53219137780611!3d25.04386598281482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a97cd4962b0b%3A0x75144e30dbb37ee6!2z5ZyL56uL6Ie65YyX56eR5oqA5aSn5a245a6P6KOV56eR5oqA56CU56m25aSn5qiT!5e1!3m2!1szh-TW!2stw!4v1724393962576!5m2!1szh-TW!2stw"
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
