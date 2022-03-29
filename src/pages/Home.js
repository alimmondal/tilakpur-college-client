import React, { useState } from 'react';
import AboutUs from '../components/Home/AboutUs/AboutUs';
import CallToAction from '../components/Home/CallToAction/CallToAction';
import CollegeInfo from '../components/Home/CollegeInfo/CollegeInfo';
import HeroSection from '../components/Home/HeroSection/HeroSection';
import Teachers from '../components/Home/OurTeacher/Teachers';
import OurTeachers from '../components/Home/OurTeachers/OurTeachers';
import Principal from '../components/Home/Principal/Principal';
import Navbar from '../components/Shared/Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection></HeroSection>
      <CollegeInfo></CollegeInfo>
      <Principal></Principal>
      <AboutUs></AboutUs>
      {window.innerWidth > 768 ? (
        <OurTeachers></OurTeachers>
      ) : (
        <Teachers></Teachers>
      )}
      {/* <Testimonial></Testimonial> */}
      <CallToAction></CallToAction>
    </div>
  );
};

export default Home;
