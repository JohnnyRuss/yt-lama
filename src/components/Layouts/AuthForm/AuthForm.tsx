import React from "react";

import { useAppDispatch } from "../../../store/hooks";
import { controllAuthModal } from "../../../store/reducers/authSlice";

import { AuthFormsContainer } from "./login.styles";
import Login from "./Login";
import GoogleAuth from "./GoogleAuth";
import Register from "./Register";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface AuthFormType {
  isModal?: boolean;
}

const AuthForm: React.FC<AuthFormType> = ({ isModal = false }) => {
  const dispatch = useAppDispatch();

  return (
    <AuthFormsContainer className="auth-box" isModal={isModal}>
      <div className="auth-head">
        <span>Sign in</span>
        <span>to continue to LamaTube</span>
      </div>
      <Login />
      <span>or</span>
      <GoogleAuth />
      <span>or</span>
      <Register />
      {isModal && (
        <button
          className="close-modal--btn"
          onClick={() => dispatch(controllAuthModal(false))}
        >
          <AiOutlineCloseCircle />
        </button>
      )}
    </AuthFormsContainer>
  );
};

export default AuthForm;
