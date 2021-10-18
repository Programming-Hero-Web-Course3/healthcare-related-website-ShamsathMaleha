import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div  className="d-flex justify-content-center h-75 mb-5 mt-5 pt-5 pb-5 register">
             <form >
    <h1>Register</h1>

<div className="form-group">
    <label>First name</label>
    <input type="text" className="form-control" placeholder="First name" />
</div>

<div className="form-group">
    <label>Last name</label>
    <input type="text" className="form-control" placeholder="Last name" />
</div>

<div className="form-group">
    <label>Email</label>
    <input type="email" className="form-control" placeholder="Enter email" />
</div>

<div className="form-group mb-3">
    <label>Password</label>
    <input type="password" className="form-control" placeholder="Enter password" />
</div>  

<button type="submit" className="btn btn-success btn-lg btn-block">Register</button>
<p className="mt-2 text-right">
    Already registered <Link to="/signin">log in?</Link>
</p>
</form>


        </div>
    );
};

export default Register;