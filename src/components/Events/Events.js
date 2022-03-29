import React from 'react';
import './Events.css';
import student1 from '../../images/student1.png';

const Events = () => {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <div>
          <h1 className="fw-bold">Smart Events</h1>
        </div>
        <div className="testRow">
          <div className="">
            <img src={student1} alt="" className="img-fluid" />
            <h4>Continuing Education</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              sapiente! Distinctio, dolor harum adipisci voluptas ullam
              laudantium itaque similique minus.
            </p>
            <a href="/">read more ...</a>
          </div>
          <div className="">
            <img src={student1} alt="" className="img-fluid" />
            <h4>Continueing Education</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              sapiente! Distinctio, dolor harum adipisci voluptas ullam
              laudantium itaque similique minus.
            </p>
            <a href="/">read more ...</a>
          </div>
          <div className="">
            <img src={student1} alt="" className="img-fluid" />
            <h4>Continueing Education</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              sapiente! Distinctio, dolor harum adipisci voluptas ullam
              laudantium itaque similique minus.
            </p>
            <a href="/">read more ...</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
