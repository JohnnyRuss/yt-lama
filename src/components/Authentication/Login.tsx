import React from "react";

import { LoginContainer } from "./login.styles";

interface LoginType {}

const Login: React.FC<LoginType> = (props) => {
  return (
    <LoginContainer>
      <div className="auth-box">
        <div className="auth-head">
          <span>Sign in</span>
          <span>to continue to LamaTube</span>
        </div>
        <form className="auth-form">
          <input
            type="text"
            name="userName"
            className="inp-field"
            placeholder="username"
          />
          <input
            type="password"
            name="password"
            className="inp-field"
            placeholder="password"
          />
          <button className="confirm-btn">Sign in</button>
        </form>
        <span>or</span>
        <form className="auth-form">
          <input
            type="text"
            name="username"
            className="inp-field"
            placeholder="username"
          />
          <input
            type="email"
            name="email"
            className="inp-field"
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            className="inp-field"
            placeholder="password"
          />
          <button className="confirm-btn">Sign up</button>
        </form>
      </div>
    </LoginContainer>
  );
};

export default Login;
