import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
//insert config from firebase
const config = {
  apiKey: "AIzaSyCeTe0G7_2GJtCixEX5kWaEN90o7A-515Y",
  authDomain: "react-assessment-8a05a.firebaseapp.com",
  databaseURL: "https://react-assessment-8a05a-default-rtdb.firebaseio.com",
  projectId: "react-assessment-8a05a",
  storageBucket: "react-assessment-8a05a.appspot.com",
  messagingSenderId: "857168939739",
  appId: "1:857168939739:web:b6302ace67f0eba72d5afe"
};
firebase.initializeApp(config);
 
export default firebase;