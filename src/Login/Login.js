import React, { useState } from 'react';
import './Login.css';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { Link, useHistory } from 'react-router-dom';
import { auth } from "../Main/firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

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
            .createUserWithEmailAndPassword ( email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/' className="logoss">
                <div className="login_logo">
                    <StorefrontIcon className="logo" />
                    <span>Store</span>
                </div>
            </Link>
            <div class="login-wrap">
		<div class="login-html">
			<input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">Sign In</label>
			<input id="tab-2"  type="radio" name="tab" className="sign-up" /><label for="tab-2" class="tab"></label>
			<div class="login-form">
				<div class="sign-in-htm">
					<div class="group">
						<label for="user" class="label">Email</label>
						<input id="user" type="text" class="input" value={email} onChange={e => setEmail(e.target.value)} />
					</div>
					<div class="group">
						<label for="pass" class="label">Password</label>
						<input id="pass" type="password" class="input" data-type="password" value={password} onChange={e => setPassword(e.target.value)} />
					</div>
					
					<div class="group value">
                        <input type="submit" class="button" onClick={signIn}  value="Sign In" />
					</div>
                    <div class="group">
						<p className="para">  By signing-in you agree to the Store Conditions of Use and Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice. </p>
					</div>
					<div class="group value">
                        <input type="submit" class="button" onClick={register}  value="Sign UP" />
					</div>
					<div class="hr"></div>
					<div class="foot-lnk">
						<a href="#forgot">Forgot Password?</a>
					</div>
				</div>
				
			</div>
		</div>
	</div>
        

{/*             
            <div className="login_container">

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button onClick={signIn} className="signin_button">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the Store Conditions of Use and Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className="register_button">Create your Store Account </button>

            </div> */}
        </div>
    )
}

export default Login
