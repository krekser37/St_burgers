import {
  SET_CURRENT_INGREDIENT_MODAL,
  RESET_CURRENT_INGREDIENT_MODAL
} from "../actions/ingredient-details";

const initialState = {
  ingredient: {},
  isOpen: false,
};

export const ingredientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    //ОТКРЫТЬ МОДАЛЬНОЕ ОКНО
    case SET_CURRENT_INGREDIENT_MODAL:
      return {
        ...state,
        ingredient: action.payload,
        isOpen: true,
      };
    //ЗАКРЫТЬ МОДАЛЬНОЕ ОКНО
    case RESET_CURRENT_INGREDIENT_MODAL:
      return {
        ...state,
        ingredient: {},
        isOpen: false,
      };

    default:
      return state;
  }
};
