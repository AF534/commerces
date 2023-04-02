import React from 'react'
import ReactArrival from './Arrival'
import Reactbanner from './banner'
import Reactfeature from './feature'
import Reactfooter from './footer'
import ReactNavbar from './Navbar'
import ReactNews from './News'
import Reactproduct from './product'
import { useNavigate } from 'react-router-dom'
function ReactHome() {
  const navi = useNavigate();
  const handleshop =()=>{
    navi("/product")
  }

  return (
    <>
    <ReactNavbar/>
    <section id='hero'>
       
       <h4>Trade-in-offer</h4>
       <h2>Super value deal</h2>
       <h1>On all product</h1>
       <p>Save more with coupons & up to 50% off</p>
       <button onClick={handleshop}>shop Now</button>
      </section>
      <Reactfeature/>
      <Reactproduct/>
      <Reactbanner/>
      <ReactArrival/>
      <ReactNews/>
      <Reactfooter/>
        
       
    </>
  )
}

export default ReactHome
