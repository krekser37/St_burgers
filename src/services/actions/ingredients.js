import { getApiResponse, getApiOrder } from "../../utils/burger-api";
import { nanoid } from "nanoid";
import { GET_INGREDIENS_REQUEST, GET_INGREDIENS_SUCCESS, GET_INGREDIENS_FAILED, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_FAILED,  SET_ORDER_MODAL, RESET_ORDER_MODAL, ADD_BUN, ADD_FILLING, DELETE_FILLING, CHANGE_FILLING_POSITION, DELETE_INGREDIENT} from "../constants/ingredients";

//initialReducer


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

//orderReducer

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
