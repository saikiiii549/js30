  
  
        // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries
 
   // Your web app's Firebase configuration
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   const firebaseConfig = {
     apiKey: "AIzaSyDGbV-eHg411J8h7unTQz1QoAj2FLxj7JY",
     authDomain: "giu-an-cuoi-khoa-jsi17.firebaseapp.com",
     databaseURL: "https://giu-an-cuoi-khoa-jsi17-default-rtdb.asia-southeast1.firebasedatabase.app",
     projectId: "giu-an-cuoi-khoa-jsi17",
     storageBucket: "giu-an-cuoi-khoa-jsi17.appspot.com",
     messagingSenderId: "125422039454",
     appId: "1:125422039454:web:c5fb08b29aa52ef6e9668f",
     measurementId: "G-SEQ2YHMEPB"
   };
 
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const analytics = getAnalytics(app);
