import React from 'react'

function ReactNews() {
  return (
    <>
      <section id='news'  className='section-p1 section-m1'>
        <div className='newtext'>
            <h4>Sign up for New Update</h4>
            <p>Get Email update about our latest shop and <span>Special offers</span></p>
        </div>
        <div className='form'>
            <input type="email" placeholder=' Your email address'/>
            <button className='explore'>Sign Up</button>
        </div>
      </section>
    </>
  )
}

export default ReactNews
