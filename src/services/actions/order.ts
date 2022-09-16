import { getApiOrder } from "../../utils/burger-api";
import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS, DELETE_INGREDIENT, GET_ORDER_FAILED, SET_ORDER_MODAL, RESET_ORDER_MODAL } from "../constants/ingredients";
import { AppDispatch, AppThunk } from "../types";

export type TOrderAction =
IGetOrderSuccess
| IGetOrderRequest
| ISetOrderModal
| IGetOrderFailed
| IResetOrderModal
| IDeleteFromOrder
;

export interface IGetOrderSuccess {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly order: number;

}

export interface IGetOrderRequest {
  readonly type: typeof GET_ORDER_REQUEST;
}

export interface ISetOrderModal {
  readonly type: typeof SET_ORDER_MODAL;
}

export interface IGetOrderFailed {
  readonly type: typeof GET_ORDER_FAILED;
}

export interface IResetOrderModal {
  readonly type: typeof RESET_ORDER_MODAL;
  readonly modalIsOpen: boolean,
  order: null;
}

export interface IDeleteFromOrder {
  type: typeof DELETE_INGREDIENT;
}


export const getOrder: AppThunk = (orderIngredients:Array<string>) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_ORDER_REQUEST,
    });
    getApiOrder(orderIngredients)
      .then((res) => {
        console.log(res.order.number);
        if (res /* && res.success */) {
          dispatch({
            type: GET_ORDER_SUCCESS,
           /*  res, */
            order: res.order.number,
          });
        }
      })
      /* .then(()=>dispatch({type: SET_ORDER_MODAL})) */
      .catch((err) => {
        dispatch({
          type: GET_ORDER_FAILED,
          payload: err,
        });
      });
  };
}

export const resetOrderModal = (): IResetOrderModal => {
  return {
    type: RESET_ORDER_MODAL,
    modalIsOpen: false,
    order: null,
  }
}

export const deleteFromOrder = (): IDeleteFromOrder => ({
  type: DELETE_INGREDIENT,
});