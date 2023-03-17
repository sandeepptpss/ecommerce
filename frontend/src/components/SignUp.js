import React, { useState } from "react";
const SignUp=()=>{
const [name, setName]=useState('');
const [email, setEmail]=useState('');
const [password, setPassword]=useState('');
console.warn(name,email,password);
// const [counter, setCounter] = useState(0);
    return(
      <>
      {/* <p>{counter}</p>
      <button>Increase by 1</button> */}
      <div className="main-signup-section">
      <form>
        <div className="main-input">
        <h1>Registration</h1>
        <input className="sign-input-box"  value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Name"></input>
        <input className="sign-input-box" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Email"></input>
        <input className="sign-input-box" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Passwprd"></input>
        <button type="button" >SignUp</button>
        </div>
        </form>
        </div>
      </>
    );
}
export default SignUp;