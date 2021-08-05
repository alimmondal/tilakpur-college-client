import React from 'react';
import Navbar from '../components/Shared/Navbar/Navbar';

const BlogPage = () => {

    const blogPageStyles = {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0fcfec',
        fontWeight: '700',
        textAlign: 'center',
        color: '#fff'
    }
    return (
        <div style={blogPageStyles} className="bg-primary">
            <Navbar />
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <h1>
                            Blogs/News/Media is coming..................
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;