import { getApiResponse } from "../../utils/burger-api";
import { GET_INGREDIENS_REQUEST, GET_INGREDIENS_SUCCESS, GET_INGREDIENS_FAILED, SET_CURRENT_TAB } from "../constants/ingredients";
import { AppDispatch, AppThunk } from "../types";
import { TIngredient } from "../types/types";


export type TIngredientsActions =
  IGetIngredientRequest
  | IGetIngredientSuccess
  | IGetIngredientFailed
  | ISetCurrentTab
  ;

export interface IGetIngredientRequest {
  readonly type: typeof GET_INGREDIENS_REQUEST;
}

export interface IGetIngredientSuccess {
  readonly type: typeof GET_INGREDIENS_SUCCESS;
  readonly data: Array<TIngredient>;
}

export interface IGetIngredientFailed {
  readonly type: typeof GET_INGREDIENS_FAILED;
}

export interface ISetCurrentTab {
  readonly type: typeof SET_CURRENT_TAB;
  currentTab: string;
}

export const getIngredients: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_INGREDIENS_REQUEST,
    });
    getApiResponse()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENS_SUCCESS,
          /*   res.data, */
            data: res.data,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_INGREDIENS_FAILED,
        });
      });
  };
}
