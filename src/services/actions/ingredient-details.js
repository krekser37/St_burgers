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
