import { useRef } from "react";
import { useAppDispatch } from "../store/hooks";
import {
  loginQuery,
  googleLoginQuery as googleLoginQuery,
  GoogleLoginArgsT,
  logoutQuery,
} from "../store/reducers/thunks/authSlice.thunks";
import { setGoogleAuthError } from "../store/reducers/authSlice";
import { firebaseAuth, firebaseGoogleAuthProvider } from "../store/firebase";
import { signInWithPopup } from "firebase/auth";

type UseAuthQueryT =
  | {
      type: "login" | "register";
    }
  | undefined;

export default function useAuthQuery(args?: UseAuthQueryT) {
  const dispatch = useAppDispatch();

  const formRef = useRef<HTMLFormElement>(null);

  function formHandler(e: React.FormEvent) {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    const output: any = {};
    for (const [key, value] of formData) {
      output[key] = value;
    }

    if (args?.type && args.type === "login") {
      dispatch(loginQuery(output));
    }
  }

  function userLogoutQuery() {
    dispatch(logoutQuery());
  }

  async function googleAuthQuery(e: React.MouseEvent) {
    e.preventDefault();

    try {
      const results = await signInWithPopup(
        firebaseAuth,
        firebaseGoogleAuthProvider
      );

      const user = results.user;

      const userCredentials: GoogleLoginArgsT = {
        username: user.displayName || "",
        email: user.email || "",
        avatar: user.photoURL || "",
      };

      user && dispatch(googleLoginQuery(userCredentials));
    } catch (error: any) {
      const errorCode = error?.code;
      const errorMessage = error?.message;
      const email = error.customData?.email;

      dispatch(setGoogleAuthError({ message: errorMessage || "" }));

      console.log({ errorCode, errorMessage, email });
    }
  }

  return { formRef, formHandler, userLogoutQuery, googleAuthQuery };
}
