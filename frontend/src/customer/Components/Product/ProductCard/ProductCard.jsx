import React from 'react';
import "./ProductCard.css";
import{useLocation, useNavigate} from "react-router-dom";

const ProductCard = ({ product }) => {
  const { title, brand, imageUrl, price ,discountedPrice,color,sizes} = product;
  const navigate= useNavigate();
  console.log("First product price",product.sizes[0].price)

  const disccountPer= Math.floor((sizes[0].price - sizes[0].discountedPrice) * 100 / sizes[0].price);

  const handleNavigate=()=>{
    navigate(`/product/${product?._id}`)
  }

  return (
   <div onClick={handleNavigate} className='productCard w-[15rem] border m-3 transition-all cursor-pointer '>
    <div className='h-[20rem]'>
        <img className='h-full w-full  object-contain object-left-top' src={imageUrl} alt="" />
    </div>
    <div className='textPart bg-white p-3 '>
        <div>
        <p  className='font-bold opacity-60'>{brand}</p>
            <p className=''>{title}</p>
        
        <p className='font-semibold opacity-50'>{color}</p>
        </div>
        
        <div className='flex space-x-2 items-center'>
            <p className='font-semibold'>₹{sizes[0].discountedPrice}</p>
            <p className='opacity-50 line-through'>₹{sizes[0].price}</p>
            <p className='text-green-600 font-semibold'>{disccountPer}% off</p>
        </div>
        
    </div>
   </div>
  );
};

export default ProductCard;
