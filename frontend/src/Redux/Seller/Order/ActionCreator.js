import {


    GET_ORDERS_FAILURE,
    GET_ORDERS_REQUEST,
    GET_ORDERS_SUCCESS,


    CONFIRMED_ORDER_FAILURE, 
    CONFIRMED_ORDER_REQUEST,
     CONFIRMED_ORDER_SUCCESS,

   
      
    PLACED_ORDER_FAILURE, 
    PLACED_ORDER_REQUEST, 
    PLACED_ORDER_SUCCESS,

    SHIP_ORDER_FAILURE,
    SHIP_ORDER_REQUEST,
    SHIP_ORDER_SUCCESS,


} from "./ActionType"

export const getOrdersRequest = () => {
    return {
      type: GET_ORDERS_REQUEST,
    };
  };

  export const getOrdersSuccess = (orders) => {
    console.log("getOrdersSuccess data",orders);
    return {
      type: GET_ORDERS_SUCCESS,
      payload: orders,
    };
  };
  
  export const getOrdersFailure = (error) => {
    return {
      type: GET_ORDERS_FAILURE,
      payload: error,
    };
  };


    // Action creators for placed order
    export const placedOrderRequest = () => ({
        type: PLACED_ORDER_REQUEST,
      });
      
      export const placedOrderSuccess = (data) => ({
        type: PLACED_ORDER_SUCCESS,
        payload: data,
      });
      
      export const placedOrderFailure = (error) => ({
        type: PLACED_ORDER_FAILURE,
        payload: error,
      });

     
      // Action creators for confirmed order
      export const confirmedOrderRequest = () => ({
        type: CONFIRMED_ORDER_REQUEST,
      });
      
      export const confirmedOrderSuccess = (data) => ({
        type: CONFIRMED_ORDER_SUCCESS,
        payload: data,
      });
      
      export const confirmedOrderFailure = (error) => ({
        type: CONFIRMED_ORDER_FAILURE,
        payload: error,
      });


      export const shipOrderRequest = () => ({
        type: SHIP_ORDER_REQUEST,
      });
      
      export const shipOrderSuccess = (data) => ({
        type: SHIP_ORDER_SUCCESS,
        payload: data,
      });
      
      export const shipOrderFailure = (error) => ({
        type: SHIP_ORDER_FAILURE,
        payload: error,
      });


