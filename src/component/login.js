import React from 'react'
import { FaFacebook, FaGoogle, FaGooglePlus, FaGooglePlusG, FaLinkedin,FaCartPlus,FaUserCircle,FaTimes,FaOutdent} from 'react-icons/fa'
import Reactfooter from './footer';
import ReactNavbar from './Navbar';
import ReactNews from './News';
import image from './image/logo/scroll.jpg';
import Reactdropdown from './dropdown/dropdown';
import { useSelector } from 'react-redux';

function Reactlogin() {
	// const cartTotalQuantity = useSelector(state => state.cart);
	function signin(){
		const container = document.getElementById('container');
		container.classList.remove("right-panel-active");
	}
	function signup(){
		const container = document.getElementById('container');
		container.classList.add("right-panel-active");
	}
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
    {/* <ReactNavbar/> */}
	<section id='header'>
        
    <h4 className='logo'><a href='/commerce'><img src={image} width={70} height={30}/></a></h4>
      <div>
        <ul id= 'navbar'>
          <li><a href="./home">Home</a></li>
          <li><a href="./product" >Product</a></li>
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
            <span>0</span>
          </span>
          </div>
          </a>
          </li>
          <li id='lg-bag'><a href="./login" className='cart active'><i><FaUserCircle/></i></a></li>
          <li><a href="#" id='cut' onClick={handlecut}><FaTimes/></a></li>
        </ul>
      </div>
      <div id='mobile'>
      <a href="/" className='cart'><i><FaCartPlus/></i></a>
      <a href="/login" className='cart'><i><FaUserCircle/></i></a>
       <i id='bar' onClick={handlebar}><FaOutdent/></i>
       
      </div>
     </section>
	 
	 <section id='login'>
<div className ="container" id="container">
	<div className ="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<div className ="social-container">
				<i className='social'><FaFacebook/></i>
				<i className='social'><FaGoogle/></i>
			     <i className='social'><FaLinkedin/></i>
			</div>
			<span className='use'>or use your email for registration</span>
			<input type="text" placeholder="Name" autoComplete= {'off'}/>
			<input type="email" placeholder="Email"required autoComplete = {'off'} />
			<input type="password" placeholder="Password" required autoComplete='off'/>
			<input type="number" placeholder="Mobile number" autoComplete='off' />
			<button className='btn1'>Sign Up</button>
		</form>
	</div>
	<div className ="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<div className ="social-container">
				<a href="#" className ="social"><i className ="fab fa-facebook-f"><FaFacebook/></i></a>
				<a href="#" className ="social"><i className ="fab fa-google-plus-g"><FaGooglePlusG/></i></a>
				<a href="#" className ="social"><i className ="fab fa-linkedin-in"><FaLinkedin/></i></a>
			</div>
			<span className='use'>or use your account</span>
			<input type="email" placeholder="Email" required autoComplete='off'/>
			<input type="password" placeholder="Password" required  autoComplete="off"/>
			<a href="#">Forgot your password?</a>
			<button className='btn1'>Sign In</button>
		</form>
	</div>
	<div className ="overlay-container">
		<div className ="overlay">
			<div className ="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
			
				<button className ="ghost btn1" id="signIn" onClick={signin}>Sign In</button>
			</div>
			<div className ="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className ="ghost btn1" id="signUp" onClick={signup}>Sign Up</button>
			</div>
		</div>
	</div>
</div>
</section>
<ReactNews/>
<Reactfooter/>
    </>
  )
}

export default Reactlogin
