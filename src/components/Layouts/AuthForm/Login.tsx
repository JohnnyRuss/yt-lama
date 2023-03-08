import React from "react";
import { useAuthQuery } from "../../../hooks";

const Login: React.FC = () => {
  const { formRef, formHandler } = useAuthQuery({ type: "login" });

  return (
    <form className="auth-form" ref={formRef} onSubmit={formHandler}>
      <input
        type="text"
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
      <button className="confirm-btn" type="submit">
        Sign in
      </button>
    </form>
  );
};

export default Login;
