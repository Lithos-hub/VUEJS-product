import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyC2WnuMN3_62gElCMXd32m_Lk4ZeLIIu04",
  authDomain: "product-3d755.firebaseapp.com",
  projectId: "product-3d755",
  storageBucket: "product-3d755.appspot.com",
  messagingSenderId: "243606980669",
  appId: "1:243606980669:web:8ed2c495cd0d581d568254"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  //////////////////////////////////
  
  export default {storage, firebase};