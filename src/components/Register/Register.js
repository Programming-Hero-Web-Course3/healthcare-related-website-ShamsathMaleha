import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Register.css'

const Register = () => {
    const {handlePassword,handleEmail,handleregistration}=useAuth()
  
    return (
        

<div>

<div class="form">
  
  
                             
  <form onSubmit={handleregistration}>
      <h1>Register</h1>
 
  <input onBlur={handleEmail} required type="email" name="email" className=" mb-3 mx-auto inputs" placeholder="Email" /> 
     <input onBlur={handlePassword} required type="password" className=" mx-auto inputs" name="Password" placeholder="Password" />
  
   
     <button type="submit" className="buttons">Sign in</button>
  </form>
  
  <br />
     <Link to="/login">Already Registered?</Link>
  
        
  </div>
</div>

    );
};

export default Register;