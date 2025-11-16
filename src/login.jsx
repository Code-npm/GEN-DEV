import React from "react";

const Login = () => {
  return (
    <div className="page">
     <div className="welcome-text">
  <h1>Welcome Back!</h1>
  {/* <p>Log in to continue exploring GEN'Z-DEV</p> */}
</div>

    <div className="login">
      <div className="login-box">
        <h2 className="logintitle">Login to GEN-DEV</h2>
        
        <div className="formgrp">
          <label htmlFor="">Email</label><br />
          <input type="email" placeholder="Email" />
        </div>
        <div className="formgrp">
          <label htmlFor="">Password</label><br />
          <input type="password"  placeholder="Password"/>
        </div>
        <div className="formgrp">
        <button type="submit" className="btn">Login</button>
        </div>
           <p className="login-footer">
          Don’t have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;
