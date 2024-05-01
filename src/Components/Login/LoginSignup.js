import React from "react";
import "./Login.css";
import Login from "./Login";
import Signup from "./Signup";
import Error from "./Error";
import { Route, Routes } from "react-router-dom";

function LoginSignup() {
  return (
    <div className="LoginSignup">
      <Routes>
        <Route path="/" component={Login} exact />
        <Route path="/signup" component={Signup} />
        <Route component={Error} />
      </Routes>
    </div>
  );
}

export default LoginSignup;
