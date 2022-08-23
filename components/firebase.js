// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVbOr39GL9wuKk5zPVgP-d7EvFrdG_8lE",
  authDomain: "taskcloud-auth-eda70.firebaseapp.com",
  projectId: "taskcloud-auth-eda70",
  storageBucket: "taskcloud-auth-eda70.appspot.com",
  messagingSenderId: "236827154417",
  appId: "1:236827154417:web:030ec28af7d5ac8cd29650",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
