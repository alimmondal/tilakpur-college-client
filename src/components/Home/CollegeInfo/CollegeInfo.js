
import React from 'react';
// import InfoCard from '../InfoCard/InfoCard';
// import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import './CollegeInfo.css';

// const infosData = [
//     {
//         title: 'Opening Hour',
//         description: 'We are opening 7 days',
//         icon: faClock,
//         background: 'primary'
//     },
//     {
//         title: 'Visit Our Location',
//         description: 'Brooklyn, NY 10003 USA',
//         icon: faMapMarker,
//         background: 'dark'
//     },
//     {
//         title: 'Contact Us Now',
//         description: '+1569856257895',
//         icon: faPhone,
//         background: 'primary'
//     }
// ]

const CollegeInfo = () => {
    return (
        <div className="container infoContainer">
            <div className="row ">
                <div className="cInfo education col-md-4">
                    <p><i class="fas fa-thumbs-up icons"></i></p>
                    <h5>Quality Education</h5>
                    <p>We don’t just give students an education and experiences that set them up for success in a career. We help them succeed in their career—to discover a field they’re passionate about and dare to lead it.</p>
                </div>
                <div className="cInfo education col-md-4 healthy">
                    <p><i class="fas fa-book-open icon"></i></p>
                    <h5>Healthy Education</h5>
                    <p>We don’t just give students an education and experiences that set them up for success in a career. We help them succeed in their career—to discover a field they’re passionate about and dare to lead it.</p>
                </div>
                <div className="cInfo education col-md-4">
                    <p><i class="fas fa-book-reader icons"></i></p>
                    <h5 className="">Qualified Teacher</h5>
                    <p>We don’t just give students an education and experiences that set them up for success in a career. We help them succeed in their career—to discover a field they’re passionate about and dare to lead it.</p>
                </div>

                {/* {
                    infosData.map(info => <InfoCard info={info}></InfoCard>)
                } */}
            </div>

        </div>
    );
};

export default CollegeInfo;