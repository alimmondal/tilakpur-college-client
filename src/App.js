import React, { createContext, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Events from './components/Events/Events';
// import PrivateRoute from './components/LogIn/PrivateRoute';
import AboutUsPage from './pages/AboutUsPage';
import Academics from './pages/Academics';
import BlogPage from './pages/BlogPage';
// import ContactPage from './pages/ContactPage';
// import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        {' '}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/academics" element={<Academics />} />
          <Route exact path="/blogs" element={<BlogPage />} />
          <Route exact path="/aboutUs" element={<AboutUsPage />} />
          <Route exact path="/signInPage" element={<SignInPage />} />
          <Route exact path="/signUpPage" element={<SignUpPage />} />
          <Route exact path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>

      {/* <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route> */}
    </UserContext.Provider>
  );
}

export default App;
