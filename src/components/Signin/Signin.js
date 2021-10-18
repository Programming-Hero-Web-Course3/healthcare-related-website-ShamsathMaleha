import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Signin.css';
import google from '../../images/google/google.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../hooks/useAuth';

const sign = <FontAwesomeIcon icon={faSignInAlt} />


const Signin = () => {
    const {signInUsingGoogle}= useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
                
            })
    }
    return (
        <div className="d-flex justify-content-center h-75 mb-5 mt-5 pt-5 pb-5 signin ">
<form>

<h1 className="mt-3">Log in</h1>

<div className="form-group mb-2 mt-2 ">
    <label>Email</label>
    <input type="email"  className="form-control" placeholder="Enter email" />
</div>

<div className="form-group mb-3">
    <label>Password</label>
    <input type="password" className="form-control" placeholder="Enter password" />
</div>



<button type="submit" className="btn btn-success btn-lg btn-block mb-3">Sign in {sign} </button>
<button onClick={handleGoogleLogin} className="btn btn-warning btn-lg btn-block mb-3 mx-3 text-white">Google <img src={google} width="20px " alt="" srcset="" /></button>

<p className=" text-center">
     New user ? <Link to="/register">Register Now!</Link>
</p>
</form>


        </div>
    );
};

export default Signin;