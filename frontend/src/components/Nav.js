import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
const  Nav =()=>{
const [active, setActive] = useState("Second");
  return (
    <div >
      <ul className='main-nav nav-menu'>
        <li  className={`Navmenu ${active === "first" ? "active" : ""}`}
  onClick={() => {
    setActive("first");
  }}><Link to ='/'>Home</Link></li>
        <li className={`Navmenu ${active === "Second" ? "active" : ""}`}
  onClick={() => {
    setActive("Second");
  }}><Link to ='/product'> Product</Link></li>

  <li  className={` Navmenu ${active === "Third" ? "active" : ""}`} onClick={() => { setActive("Third");
  }}><Link to ='/add'>Add Product</Link></li>
        <li className={` Navmenu ${active === "Fourth" ? "active" : ""}`} onClick={() => { setActive("Fourth");
  }}><Link to ='/delete'>Delete Product</Link></li>
        <li className={`Navmenu ${active === "Five" ? "active" : ""}`} onClick={() => { setActive("Five");
  }} ><Link to ='/update'>Update Product</Link></li>
        <li className={`Navmenu ${active === "Sixth" ? "active" : ""}`} onClick={() => { setActive("Sixth");
  }}><Link to ='/profile'>Profile</Link></li>
        <li className={`Navmenu ${active === "Eight" ? "active" : ""}`} onClick={() => { setActive("Eight");
  }}><Link to ='/logout'>Logout</Link></li>
        <li className={`Navmenu ${active === "Night" ? "active" : ""}`} onClick={() => { setActive("Night");
  }}><Link to ='/signup'>SignUp</Link></li>
      </ul>
    </div>
  );
}
export default Nav;
