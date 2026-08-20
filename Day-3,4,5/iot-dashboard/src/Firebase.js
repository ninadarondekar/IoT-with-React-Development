import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD-xA-LYsRgCXBhk7ZvBR8YBq7__Nuks6E",
  authDomain: "iot-with-react-878ba.firebaseapp.com",
  databaseURL: "https://iot-with-react-878ba-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iot-with-react-878ba",
  storageBucket: "iot-with-react-878ba.firebasestorage.app",
  messagingSenderId: "859809187827",
  appId: "1:859809187827:web:4a47eebdd450dd866cb486",
  measurementId: "G-3XTKMJWQH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);