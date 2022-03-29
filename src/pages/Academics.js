import React from 'react';
import Navbar from '../components/Shared/Navbar/Navbar';

const Academics = () => {
  const academicsPageStyles = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    fontWeight: '700',
    textAlign: 'center',
    color: '#fff',
  };
  return (
    <div style={academicsPageStyles}>
      <Navbar />
      <div className="container">
        <div className="row">
          <h1>This is academic page.........</h1>
        </div>
      </div>
    </div>
  );
};

export default Academics;
