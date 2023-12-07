
import React from "react";
import '../css/SignInAndSignUp.css';
import { Link } from "react-router-dom";
const SignUp=()=>{
    return(
        <div className="SignUp">
            <div className="centerUp">
        <h2>Sign Up</h2>
        <h3 className="headText">Create an Account</h3>
        <div className="Email">
        <h3 className="EmailHeader">First Name</h3>
        <input className="textInput" type="text" placeholder="First Name" />
        </div>
        <div className="Email">
        <h3 className="EmailHeader">Last Name</h3>
        <input className="textInput" type="text" placeholder="Last Name"/>
        </div>
        <div className="Email">
        <h3 className="EmailHeader">Email</h3>
        <input className="textInput" type="Email" placeholder="Enter Your Email"/>
        </div>
        <div className="Password">
        <h3 className="PasswordHeader">New Password</h3>
        <input className="textInput" type="password" placeholder="New Password" />
        </div>
        <div className="Password">
        <h3 className="PasswordHeader">Confirm Password</h3>
        <input className="textInput" type="password" placeholder="Confirm New Password"/>
        </div>
        <br></br>
        <button>Create New Account</button>
        <br/>
        <a className="Signin">Already Have an account? <Link to={"/SignIn"}>SignIn</Link></a>
        </div>
        </div>
    );
}
export default SignUp;
