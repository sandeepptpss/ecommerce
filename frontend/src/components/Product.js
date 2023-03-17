import banner from './image/jm8.jpg'; 

import React from "react";
const Product=()=>{
    
   


  const  myFunction=() =>{
        var element = document.getElementById("myDIV");
        element.classList.toggle("mystyle");
      }

    return(
        <div id="myDIV" onClick={myFunction}>
    <img src={banner} className="banner-img" alt="veg" />
        </div>
    );
}



export default Product;

