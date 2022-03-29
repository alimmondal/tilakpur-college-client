import React from 'react';
import college1 from '../../../images/college1.jpg';
import college2 from '../../../images/college2.jpg';
import college3 from '../../../images/college3.jpg';
import './AboutUs.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutUs = () => {
  const images = [college1, college2, college3];

  const settings = {
    // dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    // focusOnSelect: true,
    // cssEase: "linear",
  };

  return (
    // <div className="">
    <div className="container">
      <div className="aboutUs row">
        <div className="col-md-6">
          <Slider {...settings}>
            {images.map((img, idx) => {
              return (
                <div>
                  <img
                    src={img}
                    alt={img}
                    style={{ borderRadius: '50%' }}
                    className=""
                  />
                </div>
              );
            })}
          </Slider>
          {/* <img src={college} alt="" className="img-fluid" /> */}
          <h2>About Our College</h2>
        </div>
        <div className="col-md-6">
          <p>
            We don’t just give students an education and experiences that set
            them up for success in a career. We help them succeed in their
            career—to discover a field they’re passionate about and dare to lead
            it.
            <br />
            <br />A wonderful serenity has taken possession of my entire soul,
            like these sweet mornings of spring which I enjoy with my whole
            heart. I am alone, and feel the charm of existence in this spot,
            which was created for the bliss of souls like mine. I am so happy,
            my dear friend, so absorbed in the exquisite sense of mere.
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default AboutUs;
