import React from 'react';
import Navbar from '../components/Shared/Navbar/Navbar';

const AboutUsPage = () => {

    const aboutPageStyles = {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        fontWeight: '700',
        // color: '#fff'
    }

    return (
        <div style={aboutPageStyles} >
            <Navbar />
            <div className="row">
                <div className="">
                    <h1>About us</h1>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;