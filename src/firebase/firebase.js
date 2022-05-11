// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {getStorage } from 'firebase/storage';
import {getFirestore, doc, getDoc, collection, addDoc, getDocs, orderBy, query,serverTimestamp,updateDoc, where, onSnapshot, deleteDoc, getDocFromCache, enableIndexedDbPersistence} from 'firebase/firestore';
// import { async } from "@firebase/util";
// import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "@firebase/auth"
export { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "@firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId:process.env.REACT_APP_PROJECTID, 
  storageBucket:process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId:process.env.REACT_APP_MESAGINGSENDERID, 
  appId: process.env.REACT_APP_APPID,
  measurementId:  process.env.REACT_APP_MESAUREMENTID, 
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const auth = getAuth(app);
export const db = getFirestore(app);
const storage = getStorage(app);

export async function userExists(uid){
 const docRef = doc(db, 'users', uid);
 const res =  await getDoc(docRef);
 console.log(res);
return res.exists();
}



  createUserWithEmailAndPassword(auth)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

export const note = (  title, note) => {
  const db = getFirestore();
  const auth = getAuth();
  const userlogin = auth.currentUser;
  const uid = userlogin.uid;
  addDoc(collection(db, 'notes'), {
     title, note, uid, timestamp: serverTimestamp(),
  });
};

export const getNotes = async () => {
  const noteRef = collection(db, 'notes');
  const auth = getAuth();
  const userlogin = auth.currentUser;
  const uid = userlogin.uid;
  const orderNotes = await getDocs(query(noteRef,where("uid", "==", uid), orderBy('timestamp', 'desc')));
  return orderNotes;
};


export const getNoteEdit = async (id) => {
  const docRes = await getDoc(doc(db, 'notes', id));
  return docRes;
} 
export const updateNote = (id, newFields) => updateDoc(doc(db, 'notes', id), newFields);

 export const deleteNote = async (id) => {
  const noteDoc = doc(db, 'notes', id)
  await deleteDoc(noteDoc)
  
 }

 enableIndexedDbPersistence(db)
  .catch((err) => {
      if (err.code === 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code === 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });
  const q = query(collection(db, "notes"), where("uid", "==", "uid"));
  onSnapshot(q, { includeMetadataChanges: true }, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
              console.log("New city: ", change.doc.data());
          }
  
          const source = snapshot.metadata.fromCache ? "local cache" : "uid";
          console.log("Data came from " + source);
      });
  });