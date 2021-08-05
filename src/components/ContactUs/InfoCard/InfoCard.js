import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './InfoCard.css';

const InfoCard = ({ info }) => {

  return (
    <div className="text-white info-card">
      <div className={`d-flex justify-content-center info-container info-${info.background}`}> 
        <div className="me-2">
          <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
        </div>
        <div>
          <h6>{info.title}</h6>
          <small >{info.description}</small> <br />
          <p><small>{info.email}</small></p>

        </div>
      </div>
    </div>
  );
};

export default InfoCard;