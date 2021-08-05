import React from 'react';
import Navbar from '../components/Shared/Navbar/Navbar';

const Dashboard = () => {

    const dashboardStyles = {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0fcfec',
        fontWeight: '700',
        color: '#fff'
    }

    return (
        <div style={dashboardStyles}>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 text-center">
                        <h4></h4>
                    </div>
                    <div className="col-md-8 text-center">
                        <h1>Dashboard is coming soooooooooooooooon....</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;