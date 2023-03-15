import React from "react";

const SignUp=()=>{

    return(

        <div className="main-signup-section">
      <form>
        <div className="main-input">
        <h1>Registration</h1>
        <input className="sign-input-box" type="text" placeholder="Enter Name"></input>
        <input className="sign-input-box" type="email" placeholder="Enter Email"></input>
        <input className="sign-input-box" type="password" placeholder="Enter Passwprd"></input>

        <button type="button" >SignUp</button>
        </div>
        </form>
        </div>
    );

}
export default SignUp;