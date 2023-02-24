import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
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

export default firebaseApp;
export const firebaseAuth = getAuth();
export const firebaseGoogleAuthProvider = new GoogleAuthProvider();

export function uploadFile({
  file,
  progresSetter,
  urlSetter,
}: {
  file: File;
  progresSetter: (percentage: number) => void;
  urlSetter: (url: string) => void;
}) {
  const storage = getStorage(firebaseApp);

  const configuredFileName = `${new Date().getTime()}-${
    file.name || "unknown"
  }`;

  const storageRef = ref(storage, configuredFileName);
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
    (error) => {
      console.log(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        urlSetter(downloadURL);
      });
    }
  );
}
