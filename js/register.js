 
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
 import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

 
 const firebaseConfig = {
   apiKey: "AIzaSyC3FzKbWkquf1p6IOz3iQf9vMF-J7zTnoU",
   authDomain: "login-with-database-fire-6c1c6.firebaseapp.com",
   projectId: "login-with-database-fire-6c1c6",
   storageBucket: "login-with-database-fire-6c1c6.appspot.com",
   messagingSenderId: "757032334967",
   appId: "1:757032334967:web:cb62b3fc642390614e3872"
 };


 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 auth.languageCode = 'en'
 const provider = new GoogleAuthProvider;