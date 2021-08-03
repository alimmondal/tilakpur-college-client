import React, { useState } from 'react';
import './HeroSection.css'
import video from '../../../videos/video1.mp4';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';


const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
    return (
        <div>
            <div className="heroContainer">
                <div className="heroBg">
                    {/* <video className="videoBg" >
                        <source src={video} loop muted autoplay controls type="video/mp4" />
                    </video> */}
                    <video className="videoBg" src={video} autoPlay loop muted type="video/mp4" />
                </div>
                <div className="heroContent">
                    <i class="fas fa-book-reader text-white fs-5"></i>
                    <h1>Wellcom to <br /> Tilakpur Degree College</h1>
                    <p>we aim at creating real talents</p>
                    <div className="heroBtnWrapper">
                        <Link to='/contactUs'>
                        <button className="mainBtn "
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                        >
                           <span>Contact us</span> {hover ? <MdArrowForward /> : <MdKeyboardArrowRight />}
                        </button>
                        </Link>
                        
                    </div>
                   
                </div>
                <h1 style={{color: 'white'}}>this is info</h1>
                </div>
            </div>
            );
};

export default HeroSection;