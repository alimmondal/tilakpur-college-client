import React, { useContext, useState } from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';


import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
// import LoginBg from '../../../images/loginBg.png';
import firebaseConfig from '../firebase.config';
// import { Link } from "react-router-dom";

const SignIn = () => {

  document.title = "login";
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/dashboard" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }


  //google sign out
  const handleGoogleSignOut = () => {
    firebase.auth().signOut()
      .then(res => {
        const signedOutUser = {
          isSignedIn: false,
          name: '',
          email: '',
          photo: '',
          error: '',
          success: '',
        }
        setUser(signedOutUser);
        console.log(res);
      }).catch((error) => {
        console.log(error);
      });
  }


  //created user with email and password
  const handleBlur = (event) => {
    let isFieldValid = true;
    console.log(event.target.name, event.target.value)
    if (event.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === 'password') {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }

  }


  const handleSubmit = (e) => {
    console.log(user.email, user.password);

    if (user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
          console.log(res.user)
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    e.preventDefault();
  }


  return (
    < div className="formContainer">
      <div className="formWrap" FormWrap>
        <Link to="/">
          <div className="Icon" >tCollege</div>
        </Link>


        <div className="formContent">
          {/* <p className="text-white">Show Email: {user.email} </p>
          <p className="text-white">Show Password: {user.password}</p> */}
          <form onSubmit={handleSubmit} action="#" className="forms">
            <h1>Sign in to your account</h1>
            <p className="text-white">Show Password: {user.password}</p>
            <input type="email" onBlur={handleBlur} name="email" placeholder="your email address" id="" required className="form-control" />
            <br />
            <input type="password" onBlur={handleBlur} name="password" placeholder="Password" id="" required className="form-control" />

            <div className="form-group">
              <label htmlFor="" className=""><h6 className="Text">Forgot Password?</h6></label>
            </div>
            <div className="form-group">
              <button type="submit" className="formButton"><i class="fas fa-sign-in-alt me-2 text-white"></i>Sign In</button>
            </div>

            <Link to="/signUpPage">
            <h5 className=" mt-4 signUp">Don't have an account? sign up </h5>
          </Link>
          </form>

          

          <p style={{ color: 'red', background: '#fff', textAlign: 'center', marginTop:'20px', }}>{user.error}</p>
          {
            user.success && <p style={{ color: 'white' , textAlign: 'center' }}>User logged in successfully</p>
          }

          <div className="text-center mt-3 text-white">
            <h6>Easy login</h6>
            {user.isSignedIn ? <button onClick={handleGoogleSignOut}>Sign Out</button> : <button className="bt-brand" onClick={handleGoogleSignIn}><i class="fab fa-google text-white  p-2 me-2 App-logo" />Sign In With Google</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;