import { TOrderAction } from "../actions/order";
import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  SET_ORDER_MODAL,
  RESET_ORDER_MODAL,
} from "../constants/order";

type TOrderState = {
  order: number |null,
  orderRequest: boolean,
  orderSuccess: boolean,
  orderFailed: boolean,
  modalIsOpen: boolean,
};

const initialOrderState: TOrderState = {
  order: null,
  orderRequest: false,
  orderSuccess: false,
  orderFailed: false,
  modalIsOpen: false,
};

export const orderReducer = (state = initialOrderState, action:TOrderAction): TOrderState => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
        modalIsOpen: true,
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        order: action.order,
        orderRequest: false,
        orderSuccess: true,
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
        order: null,
    }
}
    default:
      return state;
  }
};
