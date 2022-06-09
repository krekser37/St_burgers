import { getApiResponse, getApiOrder } from "../../components/utils/burger-api";
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

//ingredientDetailsReducer
export const SET_CURRENT_INGREDIENT_MODAL = "SET_CURRENT_INGREDIENT_MODAL";
export const RESET_CURRENT_INGREDIENT_MODAL = "RESET_CURRENT_INGREDIENT_MODAL";

export function openIngredientDetails(ingredient) {
  return {
    type: SET_CURRENT_INGREDIENT_MODAL,
    payload: ingredient,
  };
}

export function closeIngredientDetails() {
  return {
    type: RESET_CURRENT_INGREDIENT_MODAL,
  };
}

//???
export const SWITCH_TAB = "SWITCH_TAB";

//orderReducer
export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";

export function getOrder(orderIngredients) {
  return function (dispatch) {
    dispatch({
      type: GET_ORDER_REQUEST,
      orderIngredients,
      /*  payload: true, */
    });
    getApiOrder(orderIngredients)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_ORDER_SUCCESS,
            order: res.data,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_ORDER_FAILED,
          /* payload: false, */
        });
        console.log(err);
      });
  };
}

//burgerConstructorReducer
/* export const ADD_MAINBUN = "GET_MAINBUN";
export const ADD_FILLING = "GET_FILLING"; */
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const CHANGE_ITEM_POSITION = "CHANGE_ITEM_POSITION";

/* export const addToConstructorFilling = (ingredient) => {
  return {
    type: ADD_FILLING,
    payload: {
      ...ingredient,
      id: nanoid(),
    },
  };
}; */

export const addToConstructor = (ingredient) => ({
  type: ADD_ITEM,
  ingredient: { ...ingredient, id: nanoid(), },
});

export const deleteFromConstructor = (id) => ({
    type: DELETE_ITEM,
    id,
  });
