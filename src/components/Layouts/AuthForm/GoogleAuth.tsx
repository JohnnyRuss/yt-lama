import React from "react";
import { useAuthQuery } from "../../../hooks";

const GoogleAuth: React.FC = () => {
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
