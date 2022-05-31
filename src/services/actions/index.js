import { getApiResponse,  getApiOrder} from "../../components/utils/burger-api";

export const GET_INGREDIENS_REQUEST = "GET_INGREDIENS_REQUEST";
export const GET_INGREDIENS_SUCCESS = "GET_INGREDIENS_SUCCESS";
export const GET_INGREDIENS_FAILED = "GET_INGREDIENS_FAILED";
export const SET_CURRENT_INGREDIENT_MODAL = "SET_CURRENT_INGREDIENT_MODAL";
export const RESET_CURRENT_INGREDIENT_MODAL = "RESET_CURRENT_INGREDIENT_MODAL";

export const SWITCH_TAB = "SWITCH_TAB";
export const SET_CURRENT_TAB = "SET_CURRENT_TAB";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";

export const GET_MAINBUN = "GET_MAINBUN";
export const GET_FILLING = "GET_FILLING";

/* export const INCREASE_ITEM = "INCREASE_ITEM";
export const DECREASE_ITEM = "DECREASE_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const GET_ITEMS = "GET_ITEMS"; */

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
      })
      console.log(err)
    });
  };
}

export function getOrder(orderIngredients) {
  return function (dispatch) {
    dispatch({
      type: GET_ORDER_REQUEST, orderIngredients
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
      })
      console.log(err)
    });
  };
}

export function openIngredientDetails(ingredient){
  return {
    type: SET_CURRENT_INGREDIENT_MODAL,
    payload: ingredient,
  }
}

export function closeIngredientDetails(){
  return {
    type: RESET_CURRENT_INGREDIENT_MODAL,
  }
}
