import {
  SET_CURRENT_INGREDIENT_MODAL,
  RESET_CURRENT_INGREDIENT_MODAL,
  TIngredientDetailsActions
} from "../actions/ingredient-details";
import { TIngredient } from "../types/types";

type TIngredientDetailsState = {
  ingredient: TIngredient | null,
  isOpen: boolean,
}

const initialState: TIngredientDetailsState = {
  ingredient: null,
  isOpen: false,
};

export const ingredientDetailsReducer = (state = initialState, action: TIngredientDetailsActions): TIngredientDetailsState => {
  switch (action.type) {
    //ОТКРЫТЬ МОДАЛЬНОЕ ОКНО
    case SET_CURRENT_INGREDIENT_MODAL:
      return {
        ...state,
        ingredient: action.ingredient,
        isOpen: true,
      };
    //ЗАКРЫТЬ МОДАЛЬНОЕ ОКНО
    case RESET_CURRENT_INGREDIENT_MODAL:
      return {
        ...state,
        ingredient: null,
        isOpen: false,
      };

    default:
      return state;
  }
};
