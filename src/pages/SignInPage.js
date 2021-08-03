import React, { useState } from 'react';
import SignIn from '../components/LogIn/SignIn/SignIn';
import Navbar from '../components/Shared/Navbar/Navbar';

const SignInPage = () => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => {
    //     setIsOpen(!isOpen);
    // }
    return (
        <div>
            {/* <Navbar /> */}
            <Navbar />
            <SignIn />
        </div>
    );
};

export default SignInPage;