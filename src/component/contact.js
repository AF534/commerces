import React from "react";
import {
  FaCartPlus,
  FaOutdent,
  FaUserCircle,
  FaTimes,
  FaMap,
  FaEnvelope,
  FaPhone,
  FaClock,
} from "react-icons/fa";
import Reactfooter from "./footer";
import ReactNews from "./News";
import image from './image/logo/scroll.jpg';
import { useSelector } from "react-redux";
function Reactcontact() {
  // const cartTotalQuantity  = useSelector(state => state.cart);

  function handlebar(){
    const nav1 = document.getElementById('navbar');
    nav1.classList.add('active');
  }
  function handlecut(){
    const nav1 = document.getElementById('navbar');
    nav1.classList.remove('active');
  }
  return (
    <>
      <section id="header">
        <h4 className="logo">
          <a href="/home"><img src={image} width={70} height={30}/></a>
        </h4>
        <div>
          <ul id="navbar">
            <li>
              <a href="./home">Home</a>
            </li>
            <li>
              <a href="./product">Product</a>
            </li>
            <li>
              <a href="./contact" className="active">
                contact
              </a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
          <a href = "/cart">
          <div className="nav-bag">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            className="bi bi-handbag-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
          </svg>
          <span className="bag-quantity">
            <span></span>
          </span>
          </div>
          </a>
          </li>
            <li id="lg-bag">
              <a href="./login" className="cart">
                <i>
                  <FaUserCircle />
                </i>
              </a>
            </li>
            <li>
              <a href="/" id="cut" onClick={handlecut}>
                <FaTimes />
              </a>
            </li>
          </ul>
        </div>
        <div id="mobile">
          <a href="/" className="cart">
            <i>
              <FaCartPlus />
            </i>
          </a>
          <i id="bar" onClick={handlebar}>
            <FaOutdent />
          </i>
        </div>
      </section>

      <section id="product" className="section-p1 about-header">
        <h2>
          <span className="color">#Let's_talk</span>
        </h2>
        <p>
          <span className="color">
            Leave the message.We love to heear from you!
          </span>
        </p>
      </section>
      <section id="contact-detail" className="section-p1">
        <div className="detail">
          <span>GET IN TOUCH</span>
          <h2>Visit one of us agency location and contact us today</h2>
          <h3>Head office</h3>
          <div>
            <li>
              <i>
                <FaMap />
              </i>
              <p>Maulana Azad National Institute Of Technology, Bhopal</p>
            </li>
            <li>
              <i>
                <FaEnvelope />
              </i>
              <p>abhaybhadoriya591@gmail.com</p>
            </li>
            <li>
              <i>
                <FaPhone />
              </i>
              <p>6261894289</p>
            </li>
            <li>
              <i>
                <FaClock />
              </i>
              <p>Monday To Saturday: 9:00 Am To 17:00 pm</p>
            </li>
          </div>
        </div>
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.6971341025305!2d77.39999991432775!3d23.21770561483453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43e3b6da758b%3A0x21e2251895133252!2sMaulana%20Azad%20National%20Institute%20of%20Technology%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1675789836921!5m2!1sen!2sin" width={600} height={450} loading="lazy"/>
        </div>
      </section>
      <ReactNews />
      {/*footer */}
      <Reactfooter />
    </>
  );
}

export default Reactcontact;
