// controllers/orderController.js
const Order = require('../models/order.model'); // Adjust path as needed to your models folder
// Controller to fetch orders by seller ID
const sellerOrderService=require("../services/sellerOrder.service")
const getOrdersBySeller = async (req, res) => {
  const { sellerId } = req.params;
  const order = await sellerOrderService.getOrdersBySeller(sellerId);
  console.log(order);

//   try {
//     // Find orders that contain items with the specified sellerId
//     const orders = await Order.find({
//       orderItems: {
//         $elemMatch: { sellerId: sellerId } // Filter by sellerId within orderItems
//       }
//     })
//       .populate('orderItems') // Populate orderItems details
//       .populate('user', 'name email'); // Populate user details if needed

//     res.status(200).json(orders);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
res.status(200).json(order)
};

module.exports = {
  getOrdersBySeller,
};
