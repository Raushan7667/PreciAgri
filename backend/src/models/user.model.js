const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required:true,
    enum: ["ADMIN","CUSTOMER", "SELLER"],
    default:"CUSTOMER"
  },
  mobile: {
    type: String,
  },
  product:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
    },
  ],
  token: {
    type: String,
    expires: "24h"
  },
  addresses: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "addresses",
    },
  ], 
  paymentInformation: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "payment_information",
    },
  ],
  ratings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ratings",
    },
  ], 
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "reviews",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
