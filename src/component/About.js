import React from "react";
import { FaCartPlus, FaOutdent, FaUserCircle, FaTimes } from "react-icons/fa";
import image from "./image/about.jpg"
import Reactfooter from "./footer";
import ReactNews from "./News";
import Reactfeature from "./feature";
import images from './image/logo/scroll.jpg';
import Reactdropdown from "./dropdown/dropdown";
import { useSelector } from "react-redux";

function ReactAbout() {
  const {cartTotalQuantity} = useSelector(state => state.cart);
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
          <a href="/home"><img src={images} width={70} height={30}/></a>
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
              <a href="./contact">contact</a>
            </li>
            <li>
              <a href="/about" className="active">
                About
              </a>
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
            <span>{cartTotalQuantity}</span>
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
       <Reactdropdown/> 
      <section id="product" className="section-p1 about-header">
        <h2>
          <span className="color">#know us</span>
        </h2>
        <p>
          <span className="color">Lorem ipsum dolor sit amet consectetur</span>
        </p>
      </section>

      <section id="about-head" className="section-p1">
        <img src={image} alt="" />

        <div>
          <h2>Who We Are?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            laudantium omnis delectus, id necessitatibus expedita quod vero
            possimus accusantium cumque porro incidunt deleniti libero alias eos
            tempore quisquam totam nulla voluptates qui, iste reprehenderit
            debitis odit sit! Harum architecto repellendus voluptatum quaerat
            quos sequi neque odit repudiandae quod temporibus, rem quisquam
            repellat eveniet itaque est ipsam! Facilis rerum ab qui illum
            laborum doloremque! Est cupiditate tempora ullam aliquam error rerum
            neque minima tenetur explicabo magnam, magni necessitatibus
            aspernatur suscipit atque, eaque excepturi consectetur facilis
            assumenda consequuntur reiciendis nesciunt sit quibusdam cumque
            adipisci. Molestiae dolores sequi doloremque, quis at laudantium
            similique a. 
          </p>

          <abbr title="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
            dolorum facilis. Dolor soluta aliquid quam itaque. Quasi facilis
            incidunt modi animi odio quis voluptatum dicta reiciendis ipsum,
            voluptatibus, quaerat ea nesciunt vel vitae distinctio accusantium
            temporibus nat
          </abbr>

          <br/><br/>
          <marquee bgcolor ="#ccc" loop ="2" scrollamount ="5" width ="100%">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nam deleniti autem, ipsa nihil quae quod corporis in atque consequuntur facilis expedita natus nesciunt animi, magnam, placeat fuga eos qui.
          </marquee>
        </div>
      </section>
      <Reactfeature/> 
      <ReactNews/> 
      {/*footer */}
      <Reactfooter />
  </>
  );
}

export default ReactAbout;
