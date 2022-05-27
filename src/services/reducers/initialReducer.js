import {
  GET_INGREDIENS_REQUEST,
  GET_INGREDIENS_SUCCESS,
  GET_INGREDIENS_FAILED,
} from "../actions/index";

const initialIngredients = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};

export const initialReducer = (state = initialIngredients, action) => {
  switch (action.type) {
    case GET_INGREDIENS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
      };
    }
    case GET_INGREDIENS_SUCCESS: {
      return {
        ...state,
        ingredients: action.ingredients,
        ingredientsRequest: false,
        /* ingredientsRequestStatus: 'success', */
        ingredientsFailed: false
      };
    }
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
