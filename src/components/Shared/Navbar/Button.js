import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';


const Button = () => {
    return (
        <div>
            <Link to='/signInPage'>
                <button className="btn me-4 bt">Sign In</button>
            </Link>
        </div>
    );
};

export default Button;