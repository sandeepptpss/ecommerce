import React from "react";

const SignUp=()=>{
    return(
        <div className="main-signup-section">
      
       <form>
        <div className="main-input">
        <h2>Registration</h2>
        <input className="sign-input-box" type="text" placholder="Enter Name"></input>
        <input className="sign-input-box" type="email" placholder="Enter Email"></input>
        <input className="sign-input-box" type="password" placholder="Enter Passwprd"></input>

        <button type="submit" class="btn btn-primary">Submit</button>
        </div>
       </form>
        </div>
    );
}
export default SignUp;