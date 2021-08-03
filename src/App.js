import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
         
          {/* <Route path="/blogDetail">
            <BlogDetail></BlogDetail>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute> */}
          
           <Route path="/signInPage">
            <SignInPage></SignInPage>
          </Route>
          {/* <Route path="/signUpPage">
            <SignUpPage></SignUpPage>
          </Route> */}
          
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
