import { DELETE_ITEM, DECREASE_ITEM, INCREASE_ITEM, GET_ITEMS } from "../actions/index";

const selectedIngredients = {
  items: [],
  
};

export const selectedIngredientsReducer = (state = selectedIngredients, action) => {
  switch (action.type) {
    case GET_ITEMS: {
      return {
        ...state,
        items: [...state.items].map((item) =>
          item.id === action.id ? { ...item, qty: ++item.qty } : item
        ),
      };
    }

    case INCREASE_ITEM: {
      return {
        ...state,
        items: [...state.items].map((item) =>
          item.id === action.id ? { ...item, qty: ++item.qty } : item
        ),
      };
    }
    case DECREASE_ITEM: {
      return {
        ...state,
        items: [...state.items].map((item) =>
          item.id === action.id ? { ...item, qty: --item.qty } : item
        ),
      };
    }
    case DELETE_ITEM: {
      return {
        ...state,
        items: [...state.items].filter((item) => item.id !== action.id),
      };
    }

    default:
      return state;
  }
};
