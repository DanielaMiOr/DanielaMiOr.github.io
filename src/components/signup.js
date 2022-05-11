import { Header } from "./header";
import { createUserWithEmailAndPassword, auth } from "../firebase/firebase";
import { useNavigate } from "react-router";
import { useState } from "react";
import '../SignUp.css';

const SignUp = () => {
    const [error, setError] = useState(false);
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signUpWithEmail = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate('/notes')
            })
            .catch((error) => {
                setError(false)
                const errorMessage = error.message;
                // ..
            });

    }
        return (
            <div className="signbox">
                <Header />
                <section className="container">
                <label id="signup">  Sign up </label>

                <input
                    type="userName"
                    className="inputUsername"
                    placeholder="Username:"
                    autoComplete="off" onChange={e => setUserName(e.target.value)}

                />
                <input
                    type="email"
                    className="inputEmail"
                    placeholder="Email:"
                    autoComplete="off" onChange={e => setEmail(e.target.value)}

                />

                <input
                    type="password"
                    className="inputPassword"
                    placeholder="Password:"
                    autoComplete="off" onChange={e => setPassword(e.target.value)}

                />
                <button className="buttonSignup" onClick={signUpWithEmail} >Continue</button>
            </section>
            </div>
        );
    
}

export default SignUp