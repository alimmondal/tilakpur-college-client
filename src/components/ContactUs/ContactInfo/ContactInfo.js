
import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';

const infosData = [
    
    {
        title: 'Visit Our Location',
        description: 'Tilakpur Degree College, Tilakpur, Akkelpur, Joypurhat.',
        icon: faMapMarker,
        background: 'primary'
    },
    {
        title: 'Contact Us Now',
        description: 'Principal:  +8801711-787063 ',
        email: 'Email: collegetilakpur@gmail.com',
        icon: faPhone,
        background: 'dark'
    },
    {
        title: 'Opening Hour',
        description: 'We are opening 7 days',
        icon: faClock,
        background: 'primary'
    },
]

const ContactInfo = () => {
    return (
        <div className="container ">
            <div className="">
        
                 {
                    infosData.map(info => <InfoCard info={info}></InfoCard>)
                } 
            </div>

        </div>
    );
};

export default ContactInfo;