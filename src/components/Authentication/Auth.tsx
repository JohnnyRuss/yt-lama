/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { PASSPORT_KEY } from "../../lib/config";

import styled from "styled-components";
import { AuthForm } from "../Layouts";

const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

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
      <AuthForm />
    </AuthContainer>
  );
};

export default Auth;
