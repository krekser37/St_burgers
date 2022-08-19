import { getApiResponse, getApiOrder } from "../../utils/burger-api";
import { nanoid } from "nanoid";

//initialReducer
export const GET_INGREDIENS_REQUEST = "GET_INGREDIENS_REQUEST";
export const GET_INGREDIENS_SUCCESS = "GET_INGREDIENS_SUCCESS";
export const GET_INGREDIENS_FAILED = "GET_INGREDIENS_FAILED";
export const SET_CURRENT_TAB = "SET_CURRENT_TAB";

export function getIngredients() {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENS_REQUEST,
    });
    getApiResponse()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENS_SUCCESS,
            ingredients: res.data,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_INGREDIENS_FAILED,
        });
        console.log(err);
      });
  };
}



//???
export const SWITCH_TAB = "SWITCH_TAB";

//orderReducer
export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";
export const SET_ORDER_MODAL = 'SET_ORDER_MODAL';
export const RESET_ORDER_MODAL = 'RESET_ORDER_MODAL';

export function getOrder(orderIngredients) {
  return function (dispatch) {
    dispatch({
      type: GET_ORDER_REQUEST,
    });
    getApiOrder(orderIngredients)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_ORDER_SUCCESS,
            order: res.order.number,
          });
        }
      })
      .then(
        dispatch({
            type: SET_ORDER_MODAL
        })
    )
      .catch((err) => {
        dispatch({
          type: GET_ORDER_FAILED,
          payload: err,
        });
      });
  };
}

export const resetOrderModal = () => {
  return {
      type: RESET_ORDER_MODAL,     
  }
}

//burgerConstructorReducer
export const ADD_BUN = "ADD_BUN";
export const ADD_FILLING = "ADD_FILLING";
export const DELETE_FILLING = "DELETE_FILLING";
export const CHANGE_FILLING_POSITION = "CHANGE_FILLING_POSITION";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";

export const addToConstructorBun = (ingredient) => ({
  type: ADD_BUN,
  ingredient: { ...ingredient },
});

export const addToConstructorFilling = (ingredient) => ({
  type: ADD_FILLING,
  ingredient: { ...ingredient, id: nanoid() },
});

export const deleteFromConstructor = (id) => ({
  type: DELETE_FILLING,
  id,
});

export const deleteFromOrder = () => ({
  type: DELETE_INGREDIENT,
});

export const changeFillingPosition = (dragIndex, hoverIndex) => ({
  type: CHANGE_FILLING_POSITION,
  dragIndex: dragIndex,
  hoverIndex: hoverIndex,
});
