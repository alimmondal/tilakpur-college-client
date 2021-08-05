import React from 'react';
import SignUp from '../components/LogIn/SignUP/SignUp';
import Navbar from '../components/Shared/Navbar/Navbar';
import LoginBg from '../images/loginBg.png'


const SignUpPage = () => {
    return (
        <div className="bg-light pt-5">
            <Navbar />
            <div  className="container pt-5">
                <div style={{margin:'70px 10px'}} className="row align-items-center pt-5 ">
                    <div  className="col-md-6 h-25 shadow p-5 rounded">
                        <SignUp />
                    </div>
                    <div className="col-md-6 d-none d-md-block align-self-end">
                        <img className="img-fluid" src={LoginBg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;