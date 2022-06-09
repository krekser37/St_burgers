import { /* ADD_MAINBUN, ADD_FILLING, */ ADD_ITEM, DELETE_ITEM, CHANGE_ITEM_POSITION } from "../actions/index";

const initialState = {
  currentIngredients: {
    bun: {},
    filling: [],
  }
};

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: 
      if (action.ingredient.type !== "bun") {
        return {
          ...state,
          currentIngredients: {
            bun: {...state.currentIngredients.bun},
            filling: [...state.currentIngredients.filling, action.payload],
          }
        }
      } else {
        return {
          ...state,
          currentIngredients: {
            bun: action.ingredient,
            filling: [...state.currentIngredients.filling],
          },
        };
      }
/*     case ADD_MAINBUN: {
      return {
        ...state,
        mainBun: action.ingredient,
        
      };
    }
    case ADD_FILLING: {
      return {
        ...state,
        filling: [...state.filling, action.ingredient]
      };
    } */
    case DELETE_ITEM: {
      return {
        ...state,
        filling: [...state.filling].filter((item) => item.id !== action.id),
      };
    } 
    case CHANGE_ITEM_POSITION: {
      return {
        ...state,
        filling: action.newFillings,
      };
    }

    default:
      return state;
  }
};
