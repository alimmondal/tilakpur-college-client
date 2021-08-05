import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import PrivateRoute from "./components/LogIn/PrivateRoute";
import AboutUsPage from "./pages/AboutUsPage";
import Academics from "./pages/Academics";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>

          {/* <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute> */}
          <Route path="/academics">
            <Academics></Academics>
          </Route>
          <Route path="/blogs">
            <BlogPage></BlogPage>
          </Route>
          <Route path="/aboutUs">
            <AboutUsPage></AboutUsPage>
          </Route>
          <Route path="/signInPage">
            <SignInPage></SignInPage>
          </Route>
          <Route path="/signUpPage">
            <SignUpPage></SignUpPage>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/contactUs">
            <ContactPage></ContactPage>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
