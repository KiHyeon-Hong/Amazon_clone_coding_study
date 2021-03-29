import React from 'react'
import './Login.css'
import {useState} from 'react';

import {Link, useHistory} from "react-router-dom";
import {auth} from "./firebase"

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        //some fancy firebase login...

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) =>  {
                //it successfully created a new use with email and password
                console.log(auth);
                if(auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/'>
                <div className='login'>
                    <img className="login_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
                </div>
            </Link>

            <div className="login_container">
                <h1>
                    Sign in
                </h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />


                    <button type='submit' onClick={signIn} className="login_signInButton">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the amazon fake
                    clone conditions of Use & slae. Please
                    see our privacy Notice, out Cookies Notice
                    and our interest-based ads Notice.
                </p>

                <button onClick={register} className="login_registerButton">Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login
