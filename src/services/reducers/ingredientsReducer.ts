import { TIngredientsActions } from "../actions/ingredients";
import {
  GET_INGREDIENS_REQUEST,
  GET_INGREDIENS_SUCCESS,
  GET_INGREDIENS_FAILED,
  SET_CURRENT_TAB,
} from "../constants/ingredients";
import { TIngredient } from "../types/types";

type TIngredientsState = {
  ingredients: ReadonlyArray<TIngredient>,
  currentTab: string,
  ingredientsRequest: boolean,
  ingredientsFailed: boolean,
  ingredientsSuccess: boolean,
  currentIngredient: number | null,
}

const initialIngredients: TIngredientsState = {
  ingredients: [],
  currentTab: "bun" ,
  ingredientsRequest: false,
  ingredientsFailed: false,
  ingredientsSuccess: false,
  currentIngredient: null,
};

export const initialReducer = (state = initialIngredients, action: TIngredientsActions): TIngredientsState => {
  switch (action.type) {
    //устанавливаем переключатель таб
    case SET_CURRENT_TAB: {
      return {
        ...state,
        /* currentTab, */
        currentTab: action.currentTab,
      };
    }
    //ЗАПРОС НА ПОЛУЧЕНИЕ ИНГРЕДИЕНТОВ
    case GET_INGREDIENS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
      };
    }
    //ПОЛУЧЕНИЕ ИНГРЕДИЕНТОВ ОТВЕТ УСПЕХ
    case GET_INGREDIENS_SUCCESS: {
      return {
        ...state,
        ingredients: action.data,
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredientsSuccess: true,
      };
    }
    //ПОЛУЧИТЬ ИНГРЕДИЕНТЫ НЕ УДАЛОСЬ
    case GET_INGREDIENS_FAILED: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: false,
      };
    }
    default:
      return state;
  }
};
