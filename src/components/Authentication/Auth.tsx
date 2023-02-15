/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { PASSPORT_KEY } from "../../lib/config";

import { AuthContainer } from "./login.styles";
import Login from "./Login";
import Register from "./Register";
import GoogleAuth from "./GoogleAuth";

interface LoginType {}

const Auth: React.FC<LoginType> = (props) => {
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAppSelector(({ auth }) => ({
    isAuthenticated: auth.isAuthenticated,
    loading: auth.loadingStatus.loading,
  }));

  useEffect(() => {
    const ide = localStorage.getItem(PASSPORT_KEY)
      ? JSON.parse(localStorage.getItem(PASSPORT_KEY) || "")
      : null;

    if (isAuthenticated && ide && !loading)
      navigate("/home", { replace: true });
  }, [isAuthenticated]);

  return (
    <AuthContainer>
      <div className="auth-box">
        <div className="auth-head">
          <span>Sign in</span>
          <span>to continue to LamaTube</span>
        </div>
        <Login />
        <span>or</span>
        <GoogleAuth />
        <span>or</span>
        <Register />
      </div>
    </AuthContainer>
  );
};

export default Auth;
