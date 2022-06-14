import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  SET_ORDER_MODAL,
  RESET_ORDER_MODAL,
} from "../actions/index";

const initialOrderState = {
  order: {},
  orderRequest: false,
  orderSucces: false,
  orderFailed: false,
  modalIsOpen: false,
};

export const orderReducer = (state = initialOrderState, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        order: action.order,
        orderRequest: false,
        orderSucces: 'success',
        orderFailed: false,
      };
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true,
      };
    }
    case SET_ORDER_MODAL: {
      return {
          ...state,
          modalIsOpen: true
      }
  }
  case RESET_ORDER_MODAL: {
    return {
        ...state,
        modalIsOpen: false,
        order: {},
    }
}
    default:
      return state;
  }
};
