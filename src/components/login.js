import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import '../Login.css';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword } from "../firebase/firebase"
import { Link, useNavigate } from "react-router-dom";



export default function Login() {

    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const LoginWithEmail = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                setError(false)
                const errorMessage = error.message;
                // ..
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, handleUserStateChanged);
    }, []);
    function handleUserStateChanged(user) {
        if (user) {
            console.log(user.displayName);
        } else {
            console.log("no hay nadie autenticado");
        }
    }

    async function GoogleOnClick() {
        const googleProvider = new GoogleAuthProvider();
        await signInWithGoogle(googleProvider);

        async function signInWithGoogle(googleProvider) {
            try {
                const res = await signInWithPopup(auth, googleProvider);
                console.log(res);
                navigate('/notes')
            } catch (error) {
                console.error(error);
            }
        }


    }
    function Header(){
        return(
        <header className="logoletters boxLogo">Space Note
        <img
            className="imagenLogo boxLogo"
            src={require(`../images/logo.png`)}
            alt="logo" />
    </header>
        );
    }
    function InputEmail(){
        return(
            <input
            type="email"
            className="inputEmail"
            placeholder="Email:"
            autoComplete="off" onChange={e => setEmail(e.target.value)}
    
        />
        );
    }
    function InputPassword(){
        return(
            <input
                        type="password"
                        className="inputPassword"
                        placeholder="Password:"
                        autoComplete="off" onChange={e => setPassword(e.target.value)}
    
                    />
        );
    }
    function ButtonLogin(){
        return(
            
            <button className="buttonLogin" onClick={LoginWithEmail} >Login</button> 
            
        );
    }
    function LineSeparation(){
        return(
            <img
                        className="line"
                        src={require(`../images/line.png`)}
                        alt="line" />
        );
    }
    function ButtonGoogle(){
        return(
             
            <button className="buttonGoogle" onClick={GoogleOnClick}></button>
            
        );
    }
    function ImageGoogle(){
        return(
            <img
                className="google"
                src={require(`../images/google.png`)}
                alt="logo" />
        );
    }
    function Paragraph(){
        return(
        <p
            className="divSignUp">You don’t have an account?</p>
        );
    }
    function ParagraphSignUp(){
        return(
            <p><Link to={"/signUp"}
                        className="pSignUp">
                        Sign up </Link></p>
        );
    }
    return (

        <div className="loginBox">
            <Header/>

           
            <section className="container">
                <label id="logIn">  Log in </label>
               <InputEmail/>
               <InputPassword/>
               <ButtonLogin/> 
               {error && <span>Error email or password</span>}
    
               <LineSeparation />
               <ButtonGoogle/>
               <ImageGoogle/>
                <Paragraph/>
                <ParagraphSignUp/>
                

            </section>
        </div>

    );
}


