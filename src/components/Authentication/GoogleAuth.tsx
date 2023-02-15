import React from "react";
import { useAuthQuery } from "../../hooks";

interface GoogleAuthType {}

const GoogleAuth: React.FC<GoogleAuthType> = (props) => {
  const { googleAuthQuery } = useAuthQuery();

  return (
    <div>
      <button onClick={googleAuthQuery} className="confirm-btn">
        Sign in with Google
      </button>
    </div>
  );
};

export default GoogleAuth;
