import axios from "axios"
import api from "../../../config/api"


import{
    getOrdersFailure,
    getOrdersSuccess,
    getOrdersRequest,
    shipOrderFailure,
    shipOrderRequest,
    shipOrderSuccess,
    confirmedOrderFailure,
    confirmedOrderRequest,
    confirmedOrderSuccess,
    placedOrderFailure,
    placedOrderRequest,
    placedOrderSuccess

  
} from "./ActionCreator"

export const getOrders=(sellerId)=>{ return async (dispatch)=>{
    console.log("user id of seller",sellerId)
        dispatch(getOrdersRequest())
        try{
            const response = await axios.get(`http://localhost:5454/api/orders/seller/${sellerId}`);
            console.log("get all orders in redux ",response.data)
            dispatch(getOrdersSuccess(response.data))
        }catch(error){
            console.log("catch error",error)
            dispatch(getOrdersFailure(error.message))
        }
    }
} 
