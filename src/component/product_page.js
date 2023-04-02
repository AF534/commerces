import React from 'react'
import { FaCartPlus, FaOutdent, FaUserCircle, FaTimes,FaStar, FaLongArrowAltRight } from "react-icons/fa";
import Reactfooter from './footer';
import ReactNews from './News';
import image1 from './image/logo/scroll.jpg';
import image from './image/product/anime.png'
// import { FaStar,FaCartPlus } from "react-icons/fa";
import { useSelector } from 'react-redux';

function Reactproduct_page() {
    const {cartTotalQuantity}  = useSelector(state => state.cart);
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
      <section id='header'>
        
        <h4 className='logo'><a href='/home'><img src={image1} width={70} height={30}/></a></h4>
          <div>
            <ul id= 'navbar'>
              <li><a href="./home" >Home</a></li>
              <li><a href="./product" className='active'>Product</a></li>
              <li><a href="./contact">contact</a></li>
              <li><a href="./about">About</a></li>
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
            <span>
                {cartTotalQuantity}
            </span>
          </span>
          </div>
          </a>
          </li>
              <li id='lg-bag'><a href="./login" className='cart'><i><FaUserCircle/></i></a></li>
              <li><a href="#" id='cut' onClick={handlecut}><FaTimes/></a></li>
            </ul>
          </div>
          <div id='mobile'>
          <a href="/cart" className='cart'><i><FaCartPlus/></i></a>
           <i id='bar' onClick={handlebar}><FaOutdent/></i>
           </div>
        </section>   
        <section id='page-header'>
       
       
       <h2>#Stayhome</h2>
       
       <p>Save more with coupons & up to 50% off</p>
       </section>
       <section id='product' className='section-p1'>
       
        <div className='pro-container'>
            <div className='pro'>
                <img src={image} alt="/" />
                <div className='description'>
                    <span>Anime</span>
                    <h5>Anime character name</h5>
                    <div className='star'>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    </div>
                    <h4>Rs 499</h4>
                    <a href="./cart" className='cart'><FaCartPlus/></a>

                </div>
            </div>
            <div className='pro'>
                <img src={image} alt="" />
                <div className='description'>
                    <span>Anime</span>
                    <h5>Anime character name</h5>
                    <div className='star'>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    </div>
                    <h4>Rs 499</h4>
                    <a href="/" className='cart'><FaCartPlus/></a>

                </div>
            </div>
            <div className='pro'>
                <img src={image} alt="" />
                <div className='description'>
                    <span>Anime</span>
                    <h5>Anime character name</h5>
                    <div className='star'>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    </div>
                    <h4>Rs 499</h4>
                    <a href="/" className='cart'><FaCartPlus/></a>

                </div>
            </div>
            <div className='pro'>
                <img src={image} alt="" />
                <div className='description'>
                    <span>Anime</span>
                    <h5>Anime character name</h5>
                    <div className='star'>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    </div>
                    <h4>Rs 499</h4>
                    <a href="/" className='cart'><FaCartPlus/></a>

                </div>
            </div>
            <div className='pro'>
                <img src={image} alt="" />
                <div className='description'>
                    <span>Anime</span>
                    <h5>Anime character name</h5>
                    <div className='star'>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    </div>
                    <h4>Rs 499</h4>
                    <a href="/" className='cart'><FaCartPlus/></a>

                </div>
            </div>
            <div className='pro'>
                <img src={image} alt="" />
                <div className='description'>
                    <span>Anime</span>
                    <h5>Anime character name</h5>
                    <div className='star'>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    </div>
                    <h4>Rs 499</h4>
                    <a href="/" className='cart'><FaCartPlus/></a>

                </div>
            </div>
            <div className='pro'>
                <img src={image} alt="" />
                <div className='description'>
                    <span>Anime</span>
                    <h5>Anime character name</h5>
                    <div className='star'>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    </div>
                    <h4>Rs 499</h4>
                    <a href="/" className='cart'><FaCartPlus/></a>

                </div>
            </div>
            <div className='pro'>
                <img src={image} alt="" />
                <div className='description'>
                    <span>Anime</span>
                    <h5>Anime character name</h5>
                    <div className='star'>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    </div>
                    <h4>Rs 499</h4>
                    <a href="/" className='cart'><FaCartPlus/></a>

                </div>
            </div>
            <div className='pro'>
                <img src={image} alt="" />
                <div className='description'>
                    <span>Anime</span>
                    <h5>Anime character name</h5>
                    <div className='star'>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    </div>
                    <h4>Rs 499</h4>
                    <a href="/" className='cart'><FaCartPlus/></a>

                </div>
            </div>
            <div className='pro'>
                <img src={image} alt="" />
                <div className='description'>
                    <span>Anime</span>
                    <h5>Anime character name</h5>
                    <div className='star'>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    </div>
                    <h4>Rs 499</h4>
                    <a href="/" className='cart'><FaCartPlus/></a>

                </div>
            </div>
            <div className='pro'>
                <img src={image} alt="" />
                <div className='description'>
                    <span>Anime</span>
                    <h5>Anime character name</h5>
                    <div className='star'>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    </div>
                    <h4>Rs 499</h4>
                    <a href="/" className='cart'><FaCartPlus/></a>

                </div>
            </div>
            <div className='pro'>
                <img src={image} alt="" />
                <div className='description'>
                    <span>Anime</span>
                    <h5>Anime character name</h5>
                    <div className='star'>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    </div>
                    <h4>Rs 499</h4>
                    <a href="/" className='cart'><FaCartPlus/></a>

                </div>
            </div>
            <div className='pro'>
                <img src={image} alt="" />
                <div className='description'>
                    <span>Anime</span>
                    <h5>Anime character name</h5>
                    <div className='star'>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    </div>
                    <h4>Rs 499</h4>
                    <a href="/" className='cart'><FaCartPlus/></a>

                </div>
            </div>
            <div className='pro'>
                <img src={image} alt="" />
                <div className='description'>
                    <span>Anime</span>
                    <h5>Anime character name</h5>
                    <div className='star'>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    </div>
                    <h4>Rs 499</h4>
                    <a href="/" className='cart'><FaCartPlus/></a>

                </div>
            </div>
            <div className='pro'>
                <img src={image} alt="" />
                <div className='description'>
                    <span>Anime</span>
                    <h5>Anime character name</h5>
                    <div className='star'>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    </div>
                    <h4>Rs 499</h4>
                    <a href="/" className='cart'><FaCartPlus/></a>

                </div>
            </div>
            <div className='pro'>
                <img src={image} alt="" />
                <div className='description'>
                    <span>Anime</span>
                    <h5>Anime character name</h5>
                    <div className='star'>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    </div>
                    <h4>Rs 499</h4>
                    <a href="/" className='cart'><FaCartPlus/></a>

                </div>
            </div>

        </div>
      </section>
       
      <section id='pagination' className='section-p1'>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#"><i><FaLongArrowAltRight/></i></a>
      </section>
        <ReactNews />
      {/*footer */}
      <Reactfooter/>
    </>
    
  )
}

export default Reactproduct_page
