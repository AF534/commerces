import React from 'react'
import './drop.css';
import { FaUserCircle } from 'react-icons/fa';
function Reactdropdown() {
  return (
    <>
      <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
    />

<div class="wrapper">
      <ul id='drop'> 
        <li class="services down">
          <a href="#" className='href'>
            <span><i><FaUserCircle/></i></span>
            {/* <i class="fa fa-angle-down icon"></i> */}
            <div class="sub-menu">
              <ul id='drop1'>
                <li className='down'>
                  <a href="#">
                    <span>Login</span>
                  </a>
                </li>
                <li className='down' id='block'>
                  <a href="#"> 
                    <span>Services 2</span>
                  
                  </a>
                </li>
              </ul>
            </div>
          </a>
        </li>
        
      </ul>
      {/* <ul id='drop'> 
        <li class="services down">
          <a href="#">
            <span>Services</span>
            <i class="fa fa-angle-down icon"></i>
            <div class="sub-menu">
              <ul id='drop1'>
                <li className='down'>
                  <a href="#">
                    <span>Services 1</span>
                  </a>
                </li>
                <li className='down'>
                  <a href="#">
                    <span>Services 2</span>
                    <i class="fa fa-angle-right icon"></i>
                    <div class="sub-menu-2">
                        <ul id='drop2'>
                            <li><a href="#"><span>Services 2 1</span></a></li>
                            <li><a href="#"><span>Services 2 2</span></a></li>
                            <li><a href="#"><span>Services 2 3</span></a></li>
                        </ul>
                    </div>
                  </a>
                </li>
                <li className='down'>
                  <a href="#">
                    <span>Services 3</span>
                    <i class="fa fa-angle-right icon"></i>
                    <div class="sub-menu-2">
                        <ul id='drop3'>
                            <li><a href="#"><span>Services 3 1</span></a></li>
                            <li><a href="#"><span>Services 3 2</span></a></li>
                            <li><a href="#"><span>Services 3 3</span></a></li>
                        </ul>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </a>
        </li>
        
      </ul>
      <ul id='drop'> 
        <li class="services down">
          <a href="#">
            <span>Services</span>
            <i class="fa fa-angle-down icon"></i>
            <div class="sub-menu">
              <ul id='drop1'>
                <li className='down'>
                  <a href="#">
                    <span>Services 1</span>
                  </a>
                </li>
                <li className='down'>
                  <a href="#">
                    <span>Services 2</span>
                    <i class="fa fa-angle-right icon"></i>
                    <div class="sub-menu-2">
                        <ul id='drop2'>
                            <li><a href="#"><span>Services 2 1</span></a></li>
                            <li><a href="#"><span>Services 2 2</span></a></li>
                            <li><a href="#"><span>Services 2 3</span></a></li>
                        </ul>
                    </div>
                  </a>
                </li>
                <li className='down'>
                  <a href="#">
                    <span>Services 3</span>
                    <i class="fa fa-angle-right icon"></i>
                    <div class="sub-menu-2">
                        <ul id='drop3'>
                            <li><a href="#"><span>Services 3 1</span></a></li>
                            <li><a href="#"><span>Services 3 2</span></a></li>
                            <li><a href="#"><span>Services 3 3</span></a></li>
                        </ul>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </a>
        </li>
        
      </ul>
      <ul id='drop'> 
        <li class="services down">
          <a href="#">
            <span>Services</span>
            <i class="fa fa-angle-down icon"></i>
            <div class="sub-menu">
              <ul id='drop1'>
                <li className='down'>
                  <a href="#">
                    <span>Services 1</span>
                  </a>
                </li>
                <li className='down'>
                  <a href="#">
                    <span>Services 2</span>
                    <i class="fa fa-angle-right icon"></i>
                    <div class="sub-menu-2">
                        <ul id='drop2'>
                            <li><a href="#"><span>Services 2 1</span></a></li>
                            <li><a href="#"><span>Services 2 2</span></a></li>
                            <li><a href="#"><span>Services 2 3</span></a></li>
                        </ul>
                    </div>
                  </a>
                </li>
                <li className='down'>
                  <a href="#">
                    <span>Services 3</span>
                    <i class="fa fa-angle-right icon"></i>
                    <div class="sub-menu-2">
                        <ul id='drop3'>
                            <li><a href="#"><span>Services 3 1</span></a></li>
                            <li><a href="#"><span>Services 3 2</span></a></li>
                            <li><a href="#"><span>Services 3 3</span></a></li>
                        </ul>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </a>
        </li>
        
      </ul>
      <ul id='drop'> 
        <li class="services down">
          <a href="#">
            <span>Services</span>
            <i class="fa fa-angle-down icon"></i>
            <div class="sub-menu">
              <ul id='drop1'>
                <li className='down'>
                  <a href="#">
                    <span>Services 1</span>
                  </a>
                </li>
                <li className='down'>
                  <a href="#">
                    <span>Services 2</span>
                    <i class="fa fa-angle-right icon"></i>
                    <div class="sub-menu-2">
                        <ul id='drop2'>
                            <li><a href="#"><span>Services 2 1</span></a></li>
                            <li><a href="#"><span>Services 2 2</span></a></li>
                            <li><a href="#"><span>Services 2 3</span></a></li>
                        </ul>
                    </div>
                  </a>
                </li>
                <li className='down'>
                  <a href="#">
                    <span>Services 3</span>
                    <i class="fa fa-angle-right icon"></i>
                    <div class="sub-menu-2">
                        <ul id='drop3'>
                            <li><a href="#"><span>Services 3 1</span></a></li>
                            <li><a href="#"><span>Services 3 2</span></a></li>
                            <li><a href="#"><span>Services 3 3</span></a></li>
                        </ul>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </a>
        </li>
        
      </ul>
      <ul id='drop'> 
        <li class="services down">
          <a href="#">
            <span>Services</span>
            <i class="fa fa-angle-down icon"></i>
            <div class="sub-menu">
              <ul id='drop1'>
                <li className='down'>
                  <a href="#">
                    <span>Services 1</span>
                  </a>
                </li>
                <li className='down'>
                  <a href="#">
                    <span>Services 2</span>
                    <i class="fa fa-angle-right icon"></i>
                    <div class="sub-menu-2">
                        <ul id='drop2'>
                            <li><a href="#"><span>Services 2 1</span></a></li>
                            <li><a href="#"><span>Services 2 2</span></a></li>
                            <li><a href="#"><span>Services 2 3</span></a></li>
                        </ul>
                    </div>
                  </a>
                </li>
                <li className='down'>
                  <a href="#">
                    <span>Services 3</span>
                    <i class="fa fa-angle-right icon"></i>
                    <div class="sub-menu-2">
                        <ul id='drop3'>
                            <li><a href="#"><span>Services 3 1</span></a></li>
                            <li><a href="#"><span>Services 3 2</span></a></li>
                            <li><a href="#"><span>Services 3 3</span></a></li>
                        </ul>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </a>
        </li>
        
      </ul>
      <ul id='drop'> 
        <li class="services down">
          <a href="#">
            <span>Services</span>
            <i class="fa fa-angle-down icon"></i>
            <div class="sub-menu">
              <ul id='drop1'>
                <li className='down'>
                  <a href="#">
                    <span>Services 1</span>
                  </a>
                </li>
                <li className='down'>
                  <a href="#">
                    <span>Services 2</span>
                    <i class="fa fa-angle-right icon"></i>
                    <div class="sub-menu-2">
                        <ul id='drop2'>
                            <li><a href="#"><span>Services 2 1</span></a></li>
                            <li><a href="#"><span>Services 2 2</span></a></li>
                            <li><a href="#"><span>Services 2 3</span></a></li>
                        </ul>
                    </div>
                  </a>
                </li>
                <li className='down'>
                  <a href="#">
                    <span>Services 3</span>
                    <i class="fa fa-angle-right icon"></i>
                    <div class="sub-menu-2">
                        <ul id='drop3'>
                            <li><a href="#"><span>Services 3 1</span></a></li>
                            <li><a href="#"><span>Services 3 2</span></a></li>
                            <li><a href="#"><span>Services 3 3</span></a></li>
                        </ul>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </a>
        </li>
        <li className='down down1'>
          <a href="#">
            <span>Gallery</span>
          </a>
        </li>
      </ul> */}
     
    </div>
    </>
  )
}

export default Reactdropdown
