import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { getUser } from '../../../Redux/Auth/Action';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../../Redux/Seller/Order/Action';


const OrderTable = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  // Access Redux state
  const { sellerOrder } = useSelector((store) => store);
  
   const {auth}=useSelector((store)=>store);

  
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);
  const sellerId=auth.user?._id
  console.log("sellor id",sellerId)
  useEffect(() => {
    if (sellerId) {
      dispatch(getOrders(sellerId));
    }
  }, [sellerId]);
 
 

  console.log("seller order in frontend by redux",sellerOrder)

 
  return (
    <div className="container mx-auto p-4">
    <h2 className="text-2xl font-bold mb-6">Seller Orders</h2>
    {sellerOrder?.orders?.length === 0 ? (
      <p>No orders available</p>
    ) : (
     sellerOrder?.orders?.map((order) => (
        <div key={order._id} className="bg-blue-500 text-white p-6 mb-6 rounded-lg shadow-lg">
          {/* First line with Order ID and Order Date */}
          <div className="flex justify-between mb-6">
            <div className="text-lg font-semibold">Order ID: {order._id}</div>
            <div className="text-lg font-semibold">Order Date: {new Date(order.orderDate).toLocaleString()}</div>
          </div>

          {/* Second line with Shipping Address, Order Items, and Status */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
            {/* Shipping Address Section */}
            <div className="bg-black p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>
              <p><strong>Name:</strong> {order.shippingAddress.firstName} {order.shippingAddress.lastName}</p>
              <p><strong>Address:</strong> {order.shippingAddress.streetAddress}</p>
              <p><strong>City:</strong> {order.shippingAddress.city}</p>
              <p><strong>State:</strong> {order.shippingAddress.state}</p>
              <p><strong>Zip Code:</strong> {order.shippingAddress.zipCode}</p>
              <p><strong>Mobile:</strong> {order.shippingAddress.mobile}</p>
            </div>

            {/* Order Items Section */}
            <div className="bg-black p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Order Items</h3>
              <ul className="space-y-2">
                {order.orderItems.map((item) => (
                  <li key={item._id} className="border-t border-gray-100 pt-2">
                    <p><strong>Product:</strong> {item.product?.title}</p>
                    <p><strong>Brand:</strong> {item.product?.brand}</p>
                    <p><strong>Size:</strong> {item.size}</p>
                    <p><strong>Quantity:</strong> {item.quantity}</p>
                    <p><strong>Discounted Price:</strong> ₹{order.totalDiscountedPrice}</p>
                    <p><strong>Total Price:</strong> ₹{order.totalPrice}</p>
                   
                  </li>
                ))}
              </ul>
            </div>

            {/* Order Status Section */}
            <div className="bg-black  p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Order Status</h3>
              <p><strong>Status:</strong> {order.orderStatus}</p>
             
            </div>
          </div>
        </div>
      ))
    )}
  </div>

  )
}

export default OrderTable

