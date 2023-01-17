import React from 'react'
import { FaFacebookF,FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


function Reactfooter() {
  return (
    <>
      <footer className='section-p1'>
        <div className='col'>
            <h3>Logo</h3>
            <h4>Contanct</h4>
            <p><strong>Address: </strong>Maulana Azad National Institute of Technology, Bhopal</p>
            <p><strong>phone: </strong>(+91) 9893213566 / </p>
            <p><strong>Hour: </strong>24x7 available,mon - sat </p>
            <div className='follow'>
                <h4>Follow us </h4>
                <div className='icon'>
                    <i><FaFacebookF/></i>
                    <i><FaInstagram/></i>
                    <i><FaTwitter/></i>
                    <i><FaYoutube/></i>
                </div>
            </div>
        </div>
        <div className='col'>
            <h4>About</h4>
            <a href="/">About Us</a>
            <a href="/">Delivery Information</a>
            <a href="/">Privacy policy</a>
            <a href="/">Terms & Condition</a>
            <a href="/">Contact Us</a>
        </div>
        <div className='col'>
            <h4>My Account</h4>
            <a href="/">Sign In</a>
            <a href="/">View cart</a>
            <a href="/">My wishlist</a>
            <a href="/">Track my order</a>
            <a href="/">Help</a>
        </div>
        <div className='copy'>
            <p>@copyright Abhay </p>
        </div>
      </footer>
    </>
  )
}

export default Reactfooter
