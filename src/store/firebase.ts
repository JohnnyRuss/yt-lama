import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  // AuthError,
} from "firebase/auth";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCb3RPaxv-qPaE3AYgPggEYC4gobj8fGQs",
  authDomain: "yt-lama.firebaseapp.com",
  projectId: "yt-lama",
  storageBucket: "yt-lama.appspot.com",
  messagingSenderId: "126805845224",
  appId: "1:126805845224:web:98628b484d37a59475155d",
  measurementId: "G-LYRXFSC06B",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// auth
const firebaseAuth = getAuth(firebaseApp);
const firebaseGoogleAuthProvider = new GoogleAuthProvider();

// interface GoogleAuthErrorT {
//   code: number;
//   message: string;
//   email: string;
// }

export async function signInWithGooglePopUp() {
  try {
    const { user } = await signInWithPopup(
      firebaseAuth,
      firebaseGoogleAuthProvider
    );

    const userCredentials = {
      username: user.displayName || "",
      email: user.email || "",
      avatar: user.photoURL || "",
    };

    return userCredentials;
  } catch (error: any) {
    console.log(error);
    // const err: AuthError = error;
    throw Error(error);
  }
}

// cloud  storage
const storage = getStorage(firebaseApp);
const getStorageRef: any = (configuredFileName: string) =>
  ref(storage, configuredFileName);

export function uploadFile({
  file,
  progresSetter,
  urlSetter,
}: {
  file: File;
  progresSetter: (percentage: number) => void;
  urlSetter: (url: string) => void;
}) {
  const configuredFileName = `${new Date().getTime()}-${
    file.name.split(" ").join("-") || "unknown"
  }`;

  const storageRef = getStorageRef(configuredFileName);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      progresSetter(progress);

      switch (snapshot.state) {
        case "paused":
          // console.log("Upload is paused");
          break;
        case "running":
          // console.log("Upload is running");
          break;
      }
    },
    (error: any) => {
      console.log(error);
      throw Error(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        urlSetter(downloadURL);
      });
    }
  );
}

export function deleteFile(fileName: string) {
  const storageRef = getStorageRef(fileName);
  deleteObject(storageRef)
    .then(() => {
      console.log("file deleted succssfuly");
    })
    .catch((err) => console.log(err));
}
