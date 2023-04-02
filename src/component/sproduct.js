import React from 'react'
import Reactfooter from './footer'
import ReactNavbar from './Navbar'
import ReactNews from './News'
import image from './image/product/anime.png';
import { FaStar,FaCartPlus } from "react-icons/fa";

function Reactsproduct() {
  
  // var mainImg = document.getElementById("mainImg");
  // var smallImg = document.getElementsByClassName("small-img");
  // smallImg[0].onclick = function() {
  //   mainImg[0].src = smallImg[0].src;
  // }
  // smallImg[1].onclick = function() {
  //   mainImg[1].src = smallImg[1].src;
  // }
  // smallImg[2].onclick = function() {
  //   mainImg[2].src = smallImg[2].src;
  // }
  // smallImg[3].onclick = function() {
  //   mainImg[3].src = smallImg[3].src;
  //   console.log('hh')
  // }
  
  return (
    <>
      <ReactNavbar/>
      <section  id='productdetail' className='section-p1'>
      <div className='singkeimage'>
        <img src={image} alt="" width={300} id='mainImg' />

        <div className='small-img-group'>
            <div className='small-img-col'>
            <img src={image} alt="" className='small-img' width={60}  />
            </div>
            <div className='small-img-col'>
            <img src={image} alt="" className='small-img' width={60} />
            </div>
            <div className='small-img-col'>
            <img src={image} alt="" className='small-img' width={60} />
            </div>
            <div className='small-img-col'>
            <img src={image} alt="" className='small-img' width={60} />
            </div>
        </div>
        </div>
      <div className='single-pro-detail'>
         <h6>Home/T-shirt</h6>
         <h4>Men's fashion T-shirts</h4>
         <h2>Rs499</h2>
         <select>
            <option>Select size</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Large</option>
         </select>
         <input type="number"  placeholder={1}/>
         <button className='normal'>Add to cart</button>
         <h4>Product detail</h4>
         <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quae rerum asperiores, cum natus sit soluta, dolor eos perferendis quod delectus eveniet saepe perspiciatis sequi. Iste, aliquid omnis?</span>
         </div>
        </section>

        <section id='product' className='section-p1'>
        <h2>Similar product</h2>
        <p>Some collection of New Arrivals </p>
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
                    <a href="/" className='cart'><FaCartPlus/></a>

                </div>
            </div>
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
                    <a href="/" className='cart'><FaCartPlus/></a>

                </div>
            </div>
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
                    <a href="/" className='cart'><FaCartPlus/></a>

                </div>
            </div>
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
                    <a href="/" className='cart'><FaCartPlus/></a>

                </div>
            </div>
            </div>
            </section>  
     
       <ReactNews/>
      <Reactfooter/>

      
    </>
  )
}

export default Reactsproduct
