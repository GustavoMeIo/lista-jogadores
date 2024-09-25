

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPuDtlBuFzNExWBXmFgt4u4y8fDz0BwwY",
  authDomain: "lista-jogadores.firebaseapp.com",
  databaseURL: "https://lista-jogadores-default-rtdb.firebaseio.com",
  projectId: "lista-jogadores",
  storageBucket: "lista-jogadores.appspot.com",
  messagingSenderId: "1018691850816",
  appId: "1:1018691850816:web:17330b83551a92b7b905a5",
  measurementId: "G-1K48EJZ01C",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();