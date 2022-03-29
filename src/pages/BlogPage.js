import React from 'react';
import '../components/Events/Events.css';
import Events from '../components/Events/Events';
import Navbar from '../components/Shared/Navbar/Navbar';

const BlogPage = () => {
  return (
    <div>
      <div className="pt-4 pb-5 bg-primary">
        <Navbar />
      </div>

      <div className="eventHero">
        <h1 className=" ">College News</h1>
      </div>
      <div className="">
        <Events />
      </div>
    </div>
  );
};

export default BlogPage;
