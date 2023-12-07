import React from "react";
import { Link } from "react-router-dom";
const SignIn=()=>{
    return(
        <div className="Sign">
            <div className="center">
        <h2>Welcome Back !</h2>
        <h3 className="headText">Sign In</h3>
        <div className="Email">
        <h3 className="EmailHeader">Email</h3>
        <input className="textInput" type="Email" placeholder="Enter Your Email"/>
        </div>
        <div className="Password">
        <h3 className="PasswordHeader">Password</h3>
        <input className="textInput" type="password" placeholder="******"/>
        </div>
        <br></br>
        <div className="checkBox" >
        <input type="checkbox"/> <b>Remember me</b>
        </div>
        <Link className="Forgot" to={"/forgot"}>Forgot Password?</Link>
        <a className="Forgot"></a>
        <br/>
        <button>Login</button>
        <br/>
        <a className="SignU">don't have an account? <Link to={"/SignUp"}>SignUp</Link></a>
        </div>
        </div>
    );
}
export default SignIn;
