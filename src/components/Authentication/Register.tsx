import React from "react";
import { useAuthQuery } from "../../hooks";

const Register: React.FC = () => {
  const { formRef, formHandler } = useAuthQuery({ type: "register" });

  return (
    <form className="auth-form" ref={formRef} onSubmit={formHandler}>
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
      <button className="confirm-btn" type="submit">
        Sign up
      </button>
    </form>
  );
};

export default Register;
