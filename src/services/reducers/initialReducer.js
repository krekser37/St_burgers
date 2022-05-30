import {
  GET_INGREDIENS_REQUEST,
  GET_INGREDIENS_SUCCESS,
  GET_INGREDIENS_FAILED,
  SET_CURRENT_TAB,
} from "../actions/index";

const initialIngredients = {
  ingredients: [],
  currentTab: "buns",
  ingredientsRequest: false,
  ingredientsFailed: false,
};

export const initialReducer = (state = initialIngredients, action) => {
  switch (action.type) {
    case SET_CURRENT_TAB: {
      return {
        ...state,
        currentTab: /* state.currentTab ===  */action.currentTab,
      };
    }

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


