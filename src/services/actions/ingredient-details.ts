import { TIngredient } from "../types/types";

//ingredientDetailsReducer
export const SET_CURRENT_INGREDIENT_MODAL: "SET_CURRENT_INGREDIENT_MODAL" = "SET_CURRENT_INGREDIENT_MODAL";
export const RESET_CURRENT_INGREDIENT_MODAL: "RESET_CURRENT_INGREDIENT_MODAL" = "RESET_CURRENT_INGREDIENT_MODAL";

// Объединяем в Union
export type TIngredientDetailsActions =
  IOpenIngredientModalAction
  | ICloseIngredientModalAction;

// Типизация экшенов
export interface IOpenIngredientModalAction {
  type: typeof SET_CURRENT_INGREDIENT_MODAL;
  ingredient: TIngredient;
}
export interface ICloseIngredientModalAction {
  type: typeof RESET_CURRENT_INGREDIENT_MODAL;
}

export const openIngredientDetails = (ingredient: TIngredient): IOpenIngredientModalAction => {
  return {
    type: SET_CURRENT_INGREDIENT_MODAL,
    ingredient,
  };
}

export const closeIngredientDetails = (): ICloseIngredientModalAction => {
  return {
    type: RESET_CURRENT_INGREDIENT_MODAL,
  };
}
