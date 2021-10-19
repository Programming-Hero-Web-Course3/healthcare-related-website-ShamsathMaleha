import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Signin.css';
import google from '../../images/google/google.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../hooks/useAuth';
import { Form } from 'react-bootstrap';


const sign = <FontAwesomeIcon icon={faSignInAlt} />



const Signin = () => {
    const {signInUsingGoogle,handlePassword,
        handleEmail,signInWithEmail}= useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
                
            })
    }
    const handleEmailLogin = () => {
        signInWithEmail()
            .then(result => {
                history.push(redirect_uri);
                
            })
    }
    return (
       



<div class="form">
  
  
                             
<form onSubmit={handleEmailLogin}>
    <h1>Log in</h1>
<input onChange={handleEmail} required type="email" name="email" className="mt-5 mb-3 mx-auto inputs" placeholder="Email" />
   
   <input required onChange={handlePassword} type="password" className=" mx-auto inputs" name="Password" placeholder="Password" />
 
   <button type="submit" className="buttons">Sign in</button>
</form>
<button onClick={handleGoogleLogin} className="btn btn-warning btn-lg btn-block mb-3 mx-3 text-white">Google <img src={google} width="20px " alt="" srcset="" /></button>

<br />
   <Link to="/register">Create account</Link>

      
</div>

    );
};

export default Signin;