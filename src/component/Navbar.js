import React from 'react'
import { FaCartPlus, FaOutdent, FaUserCircle, FaTimes, } from "react-icons/fa";
function ReactNavbar() {
     const bar = document.getElementById('bar');
  const  nav = document.getElementById('navbar')
  const cut = document.getElementById('cut');
  if (bar){
    bar.addEventListener('click',()=>{
      nav.classList.add('active');
    })
  }
  if (cut){
    cut.addEventListener('click',()=>{
      nav.classList.remove('active');
    })
  }
  return (
    <>
        <section id='header'>
        
    <h4 className='logo'><a href='/'>E-commerce</a></h4>
      <div>
        <ul id= 'navbar'>
          <li><a href="./home" className='active'>Home</a></li>
          <li><a href="./product" >Product</a></li>
          <li><a href="./contact">contact</a></li>
          <li><a href="./about">About</a></li>
          <li id='lg-bag'><a href="./cart" className='cart'><i><FaCartPlus/></i></a></li>
          <li id='lg-bag'><a href="./cart" className='cart'><i><FaUserCircle/></i></a></li>
          <li><a href="/" id='cut'><FaTimes/></a></li>
        </ul>
      </div>
      <div id='mobile'>
      <a href="/" className='cart'><i><FaCartPlus/></i></a>
       <i id='bar'><FaOutdent/></i>
       
      </div>
     </section>
    </>
  )
}

export default ReactNavbar







   

    
