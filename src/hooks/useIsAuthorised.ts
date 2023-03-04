/* eslint-disable react-hooks/exhaustive-deps */
import { PASSPORT_KEY } from "../lib/config";
import { useAppSelector } from "../store/hooks";

export default function useIsAuthorised(): boolean {
  const isAuthenticated = useAppSelector(({ auth }) => auth.isAuthenticated);

  const ide = localStorage.getItem(PASSPORT_KEY)
    ? JSON.parse(localStorage.getItem(PASSPORT_KEY) || "")
    : null;

  if (isAuthenticated && ide) return true;
  else if (!isAuthenticated || !ide) return false;
  else return false;
}
