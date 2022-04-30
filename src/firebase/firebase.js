// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getStorage, ref, uploadBytes, getDownloadURL,getBytes } from 'firebase/storage';
import {getFirestore, collection, addDoc, getDocs,orderBy, doc, getDoc, query,serverTimestamp,updateDoc, where, setDoc, deleteDoc} from 'firebase/firestore';
import { async } from "@firebase/util";
// import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "@firebase/auth"
export { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword } from "@firebase/auth"

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
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export async function userExists(uid){
 const docRef = doc(db, 'users', uid);
 const res =  await getDoc(docRef);
 console.log(res);
return res.exists();
}


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
  const noteRef = collection(db, 'Notes');
  const auth = getAuth();
  const userlogin = auth.currentUser;
  const uid = userlogin.uid;
  const orderNotes = await getDocs(query(noteRef,where("uid", "==", uid), orderBy('timestamp', 'desc')));
  return orderNotes;
};
export const getNoteEdit = (id) => getDoc(doc(db, 'Posts', id));
export const updateNote = (id, newFields) => updateDoc(doc(db, 'Posts', id), newFields);

