import React from 'react';
import './Principal.css';
import principal from '../../../images/image4.png';

const Principal = () => {
  return (
    <div className="">
      <div className="pContainer ">
        <div className="col-md-6 imgDiv1">
          <img src={principal} alt="" className="pImg" />
        </div>
        <div className="col-md-6 pWord">
          <h6>A Word</h6>
          <h1>From Our Principal</h1>
          <p>
            ” We don’t just give students an education and experiences that set
            them up for success in a career. We help them succeed in their
            career—to discover a field they’re passionate about and dare to lead
            it. A wonderful serenity has taken possession of my entire soul,
            like these sweet mornings of spring which I enjoy with my whole
            heart. I am alone, and feel the charm of existence in this spot,
            which was created for the bliss of souls like mine. I am so happy,
            my dear friend, so absorbed in the exquisite sense of mere.. “ ” We
            don’t just give students an education and experiences that set them
            up for success in a career. We help them succeed in their career—to
            discover a field they’re passionate about and dare to lead it. A
            wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine. I am so happy, my dear
            friend, so absorbed in the exquisite sense of mere.. “
          </p>
          <p className="signature">By Jobaer Shopon</p>
        </div>
        <div className="col-md-6 imgDiv">
          <img src={principal} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Principal;
