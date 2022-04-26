import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "@firebase/auth"
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import '../Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
// import {userNavigate} from "react-router-dom";
export default function Login(){

const[error, setError]= useState(false);
const[email, setEmail]= useState("");
const [password, setPassword]= useState(""); 
// const navigate = userNavigate("notes") 

const loginWithEmail=(e)=>{
e.preventDefault();

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    setError(true)
    const errorMessage = error.message;
    // ..
  });
}

    useEffect(()=>{
        onAuthStateChanged(auth, handleUserStateChanged);
    },[]);
    function handleUserStateChanged(user){
        if(user){
            console.log(user.displayName);
        }else {
            console.log("no hay nadie autenticado");
        }
    }

    async function googleOnClick(){
        const googleProvider =  new GoogleAuthProvider();
        await signInWithGoogle(googleProvider);
        async function signInWithGoogle(googleProvider){
            try{
                const res = await signInWithPopup(auth, googleProvider);
                console.log(res);
            }catch(error){
            console.error(error);
            }
    }

   
    }
    return(
    <div  className="loginBox">
        
            <header className="logoletters boxLogo">Space Note
                <img
            className="imagenLogo boxLogo"
             src={ require(`../images/logo.png`)} 
              alt="logo" />
            </header>
            <section className= "container">
             <label id= "logIn">  Log in </label>
             <input
             type="email"
             className="inputEmail"
             placeholder="Email:"
             autoComplete="off" onChange={e=>setEmail(e.target.value)}
           
             />
              <input
             type="password"
             className="inputPassword"
             placeholder="Password:"
             autoComplete="off" onChange={e=>setPassword(e.target.value)}
            
             />
             <button className ="buttonLogin" onClick={loginWithEmail} >Login</button>
             {error &&<span>Error email or password</span>}
             <img
             className="line"
             src={ require(`../images/line.png`)} 
             alt="line" />
                 <button className="buttonGoogle" onClick = {googleOnClick}></button>
                 <img
                 className= "google"
                 src={ require(`../images/google.png`)} 
              alt="logo" />
              <p
              className = "divSignUp">You don’t have an account?</p>
              <p
              className = "pSignUp">Sign up</p>

             </section>
     </div>
    );
}


   