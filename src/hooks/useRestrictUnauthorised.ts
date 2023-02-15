/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useIsAuthorised from "./useIsAuthorised";

export default function useRestrictUnauthorised() {
  const navigate = useNavigate();
  const isAuthorised = useIsAuthorised();

  useEffect(() => {
    if (!isAuthorised) navigate("/home", { replace: true });
  }, [isAuthorised]);
}
