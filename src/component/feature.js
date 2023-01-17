import React from 'react'
import image from './image/feature/pngegg.png'

function Reactfeature() {
  return (
    <>
      <section id='feature' className='section-p1'>
        <div className='fb-box'>
            <img src={image} alt="/" />
            <h6>Free Shipping</h6>
        </div>
        <div className='fb-box'>
            <img src={image} alt="/" />
            <h6>Online Order</h6>
        </div>
        <div className='fb-box'>
            <img src={image} alt="/" />
            <h6>Save money</h6>
        </div>
        <div className='fb-box'>
            <img src={image} alt="/" />
            <h6>Offers</h6>
        </div>
        <div className='fb-box'>
            <img src={image} alt="/" />
            <h6>24/7 support</h6>
        </div>
      </section>
    </>
  )
}

export default Reactfeature
