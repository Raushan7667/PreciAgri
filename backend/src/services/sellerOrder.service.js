const mongoose = require('mongoose');
const Order = require('../models/order.model');
const OrderItem = require('../models/orderItems');
const Product = require('../models/product.model');

async function getOrdersBySeller(sellerId) {
    try {
      const orders = await Order.aggregate([
        {
          $lookup: {
            from: 'orderitems', // Collection name of OrderItem
            localField: 'orderItems',
            foreignField: '_id',
            as: 'orderItems',
          },
        },
        {
          $unwind: '$orderItems',
        },
        {
            $lookup: {
              from: 'products',
              localField: 'orderItems.product',
              foreignField: '_id',
              as: 'productDetails',
            },
          },
          {
            $unwind: '$productDetails',
          },{
            $match: { 'productDetails.sellerId': new mongoose.Types.ObjectId(sellerId) }, // Corrected line
          },
          {
            $group: {
              _id: '$_id', // Group by order
              user: { $first: '$user' },
              orderDate: { $first: '$orderDate' },
              deliveryDate: { $first: '$deliveryDate' },
              shippingAddress: { $first: '$shippingAddress' },
              paymentDetails: { $first: '$paymentDetails' },
              totalPrice: { $first: '$totalPrice' },
              totalDiscountedPrice: { $first: '$totalDiscountedPrice' },
              orderStatus: { $first: '$orderStatus' },
              totalItem: { $first: '$totalItem' },
              createdAt: { $first: '$createdAt' },
              orderItems: { $push: '$orderItems' }, // Collect relevant order items
            },
          },
      ]);
  console.log(orders);
      return orders;
    } catch (error) {
      console.error('Error fetching orders by seller:', error);
      throw error;
    }
  }

module.exports = {
    getOrdersBySeller,
  };
