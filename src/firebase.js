import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBmgeZbNgsnii5rgssz4m2BUqd-elFPG5g",
    authDomain: "my-react-app-be834.firebaseapp.com",
    projectId: "my-react-app-be834",
    storageBucket: "my-react-app-be834.appspot.com",
    messagingSenderId: "553663351609",
    appId: "1:553663351609:web:00bc917dcd55ce6e3176e8"
  };
  const app = initializeApp(firebaseConfig);

  export default app
  export const auth = getAuth();
