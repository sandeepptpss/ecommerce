import React from 'react';
import { Link } from 'react-router-dom'
const  Nav =()=>{
  return (
    <div >
      <ul className='main-nav nav-menu'>
        <li><Link to ='/'>Product</Link></li>
        <li><Link to ='/add'>Add Product</Link></li>
        <li><Link to ='/delete'>Delete Product</Link></li>
        <li><Link to ='/update'>Update Product</Link></li>
        <li><Link to ='/profile'>Profile</Link></li>
        <li><Link to ='/logout'>Logout</Link></li>
        <li><Link to ='/signup'>SignUp</Link></li>
      </ul>
    </div>
  );
}

export default Nav;
