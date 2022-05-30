import { getApiResponse } from "../../components/utils/burger-api";

export const GET_INGREDIENS_REQUEST = "GET_INGREDIENS_REQUEST";
export const GET_INGREDIENS_SUCCESS = "GET_INGREDIENS_SUCCESS";
export const GET_INGREDIENS_FAILED = "GET_INGREDIENS_FAILED";

export const SWITCH_TAB = "SWITCH_TAB";
export const SET_CURRENT_TAB = "SET_CURRENT_TAB";

export const INCREASE_ITEM = "INCREASE_ITEM";
export const DECREASE_ITEM = "DECREASE_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const GET_ITEMS = "GET_ITEMS";

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

export function setCurrentTab(currentTab) {
  return {
    type: SET_CURRENT_TAB,
    currentTab,
  };
}
