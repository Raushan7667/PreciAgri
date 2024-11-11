import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../Redux/Auth/Action';

const ProductTable = () => {

    const dispatch=useDispatch()
    const {auth}=useSelector((store)=>store);
    const jwt = localStorage.getItem("jwt");
    useEffect(() => {
      if (jwt) {
        dispatch(getUser(jwt));
      }
    }, [jwt]);
    const sellerId=auth.user?._id

    console.log("seller selling product",auth.user)
  return (
    <div>
    i am in product table
      
    </div>
  )
}

export default ProductTable
