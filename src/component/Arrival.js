import React from 'react'
import { FaStar } from "react-icons/fa";
import {useGetAllProductsQuery } from "../feature/productApi";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../feature/cartSlice';
import { useNavigate } from "react-router";

const ReactArrival = () => {

  const { data, error, isLoading } = useGetAllProductsQuery();
//   console.log("Api", isLoading);
  const dispatch = useDispatch();
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
        <h2>New Arrivals</h2>
        <p>Some collection of New Arrivals </p>
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
      </section>
    </>
    )};

    </div>
  )
}

export default ReactArrival
