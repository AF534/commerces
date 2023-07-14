import React from 'react'
import { useNavigate } from 'react-router-dom'

function Reactbanner() {
  const navigate = useNavigate();

  const explore = () =>{
       navigate('/product');
  }
  return (
    <>
      <section id='banner' className='section-m1'>
        <h4>Offers</h4>
        <h2>Up to <span>60% off</span> All the t-shirt and Hoddies </h2>
        <button className='explore' onClick={explore}>Explore More</button>
         </section>
    </>
  )
}

export default Reactbanner
