import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Signin.css';
import google from '../../image/google/google.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../hooks/useAuth';
import { Form } from 'react-bootstrap';
import {  getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { useState } from 'react';




const sign = <FontAwesomeIcon icon={faSignInAlt} />



const Signin = () => {
    const {signInUsingGoogle,handlePassword,handleEmail,email,password}= useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    const [error, setError]= useState('');
    const [loading, setLoading] = useState(true)
    const [user, setUser]= useState({});
    // const [password, setPassword]= useState('');
    
    const auth = getAuth();

          
    
   
    const signInWithEmail = e =>{
       
        if (password.length < 6) {
            setError('Please at least 6 or more character as password')
        }
        else {
            setLoading(true)
            signInWithEmailAndPassword(auth, email,password)
            .then(result=>{
              setUser(result.user);
              console.log(user)
              setError('')
              e.target.reset()
              history.push(redirect_uri)
            })
            .catch(error=>{
              setError(error.message)
              console.log(error.message)
          })
          .finally(()=>{setLoading(false)})
        // processLogin(email,password)
     
    }
    e.preventDefault();
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
                
            })
    }
    const handleEmailLogin = (e) => {
        e.preventDefault();
        // signInWithEmail(e.target.password)
            // .then(result => {
            //     history.push(redirect_uri);
            // processLogin(e.target.email.value,e.target.password.value)
            // })
            setLoading(true)
            signInWithEmailAndPassword(auth, email,password)
            .then(result=>{
              setUser(result.user);
              console.log(user)
              setError('')
              e.target.reset()
              history.push(redirect_uri)
            })
            .catch(error=>{
              setError(error.message)
              console.log(error.message)
          })
          .finally(()=>{setLoading(false)})
            
    }

    return (
       



<div class="form">
  
  
                             
<form onSubmit={signInWithEmail}>
    <h1>Log in</h1>
<input onBlur={handleEmail} required type="email" name="email" className="mt-5 mb-3 mx-auto inputs" placeholder="Email" />
   
   <input required onBlur={handlePassword} type="password" className=" mx-auto inputs" name="Password" placeholder="Password" />
    <p className="mt-2 text-danger">{error}</p>
   <button type="submit" className="buttons">Sign in</button>
</form>
<button onClick={handleGoogleLogin} className="btn btn-warning btn-lg btn-block mb-3 mx-3 text-white">Google <img src={google} width="20px " alt="" srcset="" /></button>

<br />
   <Link to="/register">Create account</Link>

      
</div>

    );
};

export default Signin;