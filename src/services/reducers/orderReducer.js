import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
} from "../actions/index";

const initialOrderState = {
  totalprice: 0,
  orderIngredients: [],
  orderNumber: null,
  orderRequest: false,
  orderSucces: false,
  orderFailed: false,
};

export const orderReducer = (state = initialOrderState, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
        orderIngredients: action.orderIngredients
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        totalprice: action.totalprice,
        orderNumber: action.res.order.number,
        orderRequest: false,
        orderSucces: 'success',
        orderFailed: false
      };
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        orderIngredients: [],
        orderRequest: false,
        orderFailed: false,
      };
    }
    default:
      return state;
  }
};
