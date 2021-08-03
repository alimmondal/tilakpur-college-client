import React, { useState } from 'react';
import AboutUs from '../components/Home/AboutUs/AboutUs';
import CollegeInfo from '../components/Home/CollegeInfo/CollegeInfo';
import HeroSection from '../components/Home/HeroSection/HeroSection';
import OurTeachers from '../components/Home/OurTeachers/OurTeachers';
import Principal from '../components/Home/Principal/Principal';
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
            {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
            <Navbar />
            <HeroSection></HeroSection>
            <CollegeInfo></CollegeInfo>
            <Principal></Principal>
            <AboutUs></AboutUs>
            <OurTeachers></OurTeachers>
            <Footer></Footer>
        </div>
    );
};

export default Home;