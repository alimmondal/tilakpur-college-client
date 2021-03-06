import React from 'react';
import './Teachers.scss';
import teacher1 from '../../../images/image1.png';
import teacher2 from '../../../images/principal.png';
import teacher3 from '../../../images/image4.png';
import teacher4 from '../../../images/image5.jpg';
import teacher5 from '../../../images/image6.jpg';
import teacher6 from '../../../images/image5.jpg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Teachers = () => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
  };

  return (
    <div className="boddy">
      <div className="container carousel">
        <h1 className="text-white fw-bold py-3"> Our Teachers</h1>
        <Slider {...settings}>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={teacher2} alt="" className="img-fluid" />
              </div>
              <ul className="social-icons">
                <li>
                  <a href="https://www.facebook.com/shamimarabegum.sonali/">
                    <i className="fab fa-facebook "></i>{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>{' '}
                  </a>
                </li>
              </ul>
              <div className="details">
                <h2>
                  John Doe <span className="job-title">UI developer</span>{' '}
                </h2>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={teacher1} alt="" className="img-fluid" />
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook "></i>{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>{' '}
                  </a>
                </li>
                {/* <li><a href="#"><i className="fab fa-linkedin"></i> </a></li> */}
              </ul>
              <div className="details">
                <h2>
                  John Doe <span className="job-title">UI developer</span>{' '}
                </h2>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={teacher3} alt="" className="img-fluid" />
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook "></i>{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>{' '}
                  </a>
                </li>
                {/* <li><a href="#"><i className="fab fa-linkedin"></i> </a></li> */}
              </ul>
              <div className="details">
                <h2>
                  John Doe <span className="job-title">UI developer</span>{' '}
                </h2>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={teacher4} alt="" />
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook "></i>{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>{' '}
                  </a>
                </li>
                {/* <li><a href="#"><i className="fab fa-linkedin"></i> </a></li> */}
              </ul>
              <div className="details">
                <h2>
                  John Doe <span className="job-title">UI developer</span>{' '}
                </h2>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={teacher5} alt="" />
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook "></i>{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>{' '}
                  </a>
                </li>
                {/* <li><a href="#"><i className="fab fa-linkedin"></i> </a></li> */}
              </ul>
              <div className="details">
                <h2>
                  John Doe <span className="job-title">UI developer</span>{' '}
                </h2>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={teacher6} alt="" />
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook"></i>{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>{' '}
                  </a>
                </li>
                {/* <li><a href="#"><i className="fab fa-linkedin"></i> </a></li> */}
              </ul>
              <div className="details">
                <h2>
                  John Doe <span className="job-title">UI developer</span>{' '}
                </h2>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Teachers;
