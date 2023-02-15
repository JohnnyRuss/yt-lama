/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { PASSPORT_KEY } from "../lib/config";
import { useAppSelector } from "../store/hooks";

export default function useIsAuthorised(): boolean {
  const isAuthenticated = useAppSelector(({ auth }) => auth.isAuthenticated);
  const [isAuthorised, setIsAuthorised] = useState<boolean>(false);

  useEffect(() => {
    const ide = localStorage.getItem(PASSPORT_KEY)
      ? JSON.parse(localStorage.getItem(PASSPORT_KEY) || "")
      : null;

    if (isAuthenticated && ide) setIsAuthorised(true);
    else if (!isAuthenticated && !ide) setIsAuthorised(false);
  }, [isAuthenticated]);

  return isAuthorised;
}
