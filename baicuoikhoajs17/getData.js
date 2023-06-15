import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc }
from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-lite.js";




import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//
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
//khai bao
const db = getFirestore(app);

const analytics = getAnalytics(app);


const getData = async(db) => {
  const querySnapshot = await getDocs(collection(db, "blogs"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    
  });
  return querySnapshot.docs;
}

//delete
const deleteData = async (db, id) => {
  await deleteDoc(doc(db, "blogs", id));
}
const createData = async (db, Object) => 
{
  try {
  const docRef = await addDoc(collection(db, "users"), {
    Name: "Bí kíp để trở thành một ông bố tuyệt vời",
    author: "string",
    createdAt: "15/06/2023",
    content: "string",
    avaUrl: "https://anvientv.com.vn/uploads/upload/1672721900_chup-anh-gia-dinh-4-nguoi(7).jpg"
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

}




await getData(db).then(rs => rs);
// await createData(db, "s").then(rs => rs).catch(e => e)
await deleteDataById(db, "eJqaWJ4qHE41rjNasp2B");
  
