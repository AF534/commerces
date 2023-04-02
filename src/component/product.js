import React from 'react'
import image from './image/product/anime.png'
import { FaStar,FaCartPlus } from "react-icons/fa";
import {useGetAllProductsQuery } from "../feature/productApi";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../feature/cartSlice';
const Reactproduct = () => {

  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("Api", isLoading);
  const dispatch  = useDispatch();
  const navigate = useNavigate();
const handleAddToCart = (product) =>{
    dispatch(addToCart(product));
    navigate("/cart");
};
  return (
    <div>
    {isLoading?(
        <p>loading</p>
      ):error?(
        <p>error is coming</p>
      ) : (
    <>

      <section id='product' className='section-p1'>
        <h2>product</h2>
        <p>Some collection of product   </p>
        <div className='pro-container'>
        {data &&
              data?.map((product) => (
            <div key={product.id} className='pro'>
            <img src={product.image} alt={product.name} />
                <div className='description'>
                    <span>Anime</span>
                    <h3>{product.name}</h3>

                    <span>{product.desc}</span>
                    <div className='star'>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    </div>
                    <span className="price">{product.price}</span>
                    <button onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>

                </div>
            </div>
              ))}
        </div>
        <div className='pro-container'>
        {data &&
              data?.map((product) => (
            <div key={product.id} className='pro'>
            <img src={product.image} alt={product.name} />
                <div className='description'>
                    <span>Anime</span>
                    <h3>{product.name}</h3>

                    <span>{product.desc}</span>
                    <div className='star'>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    <i ><FaStar/></i>
                    </div>
                    <span className="price">${product.price}</span>
                    <button onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>

                </div>
            </div>
              ))}
        </div>
      </section>
    </>
    )};

    </div>
  )
}


export default Reactproduct
