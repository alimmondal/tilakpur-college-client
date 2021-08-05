import React from 'react';
import './CallToAction.css';
import {
    Link
} from "react-router-dom";

const CallToAction = () => {
    return (
        <div className="callToBg">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-9">
                        <h3>Contact us for Admission or any other need</h3>
                    </div>

                    <div className="col-md-3">
                        <Link to="/contactUs">
                            <button className="callToBtn">CALL TO ACTION<i class="fa fa-chevron-right "></i></button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CallToAction;