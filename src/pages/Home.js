import React, { useState } from 'react';
import AboutUs from '../components/Home/AboutUs/AboutUs';
import CallToAction from '../components/Home/CallToAction/CallToAction';
import CollegeInfo from '../components/Home/CollegeInfo/CollegeInfo';
import HeroSection from '../components/Home/HeroSection/HeroSection';
import Teachers from '../components/Home/OurTeacher/Teachers';
import OurTeachers from '../components/Home/OurTeachers/OurTeachers';
import Principal from '../components/Home/Principal/Principal';
import Testimonial from '../components/Home/Testimonial/Testimonial';
import Testimonal from '../components/Home/Testimonial/Testimonial';
import Footer from '../components/Shared/Footer/Footer';
import Navbar from '../components/Shared/Navbar/Navbar';
// import Navbar from '../components/Navbar/Navbar';
// import Sidebar from '../components/Sidebar/Sidebar';


const Home = () => {

    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => {
    //     setIsOpen(!isOpen);
    // }
    return (
        <div>
            <Navbar />
            <HeroSection></HeroSection>
            <CollegeInfo></CollegeInfo>
            <Principal></Principal>
            <AboutUs></AboutUs>
            {window.innerWidth > 768 ? <OurTeachers></OurTeachers> :
            <Teachers></Teachers>}
            <Testimonial></Testimonial>
            <CallToAction></CallToAction>
            <Footer></Footer>
        </div>
    );
};

export default Home;