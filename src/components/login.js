import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "@firebase/auth"
import { useEffect } from "react";
import { auth } from "../firebase/firebase";
import '../Login.css';


export default function Login(){



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

    async function handleOnClick(){
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
             <label id= "logIn">  Login </label>
             <input
             type="email"
             className="inputEmail"
             placeholder="Email:"
             autoComplete="off"
            //  onChange={(event) =>{
            //  setLoginEmail(event.target.value);
            //  }}
            //  required
             />
              <input
             type="password"
             className="inputPassword"
             placeholder="Password:"
             autoComplete="off"
            //  onChange={(event) =>{
            //  setLoginPassword(event.target.value);
            //  }}
            //  required
             />
                 <button className="buttonGoogle" onClick = {handleOnClick}></button>
                 <img
                 className= "google"
                 src={ require(`../images/google.png`)} 
              alt="logo" />
              
             </section>
     </div>
    );
}


   