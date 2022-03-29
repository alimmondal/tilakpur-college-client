import React from 'react';
import Navbar from '../components/Shared/Navbar/Navbar';
import About from '../components/About/About';

const AboutUsPage = () => {
  return (
    <div>
      <div className="pt-4 pb-5 bg-primary">
        <Navbar />
      </div>
      <About />
    </div>
  );
};

export default AboutUsPage;
