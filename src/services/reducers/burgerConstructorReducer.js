import {
  ADD_BUN,
  ADD_FILLING,
  DELETE_FILLING,
  CHANGE_FILLING_POSITION,
} from "../actions/index";

const initialState = {
  bun: {},
  filling: [],
};

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUN: {
      return {
        ...state,
        bun: action.ingredient,
      };
    }
    case ADD_FILLING: {
      return {
        ...state,
        filling: [...state.filling, action.ingredient],
      };
    }
    case DELETE_FILLING: {
      return {
        ...state,
        filling: [...state.filling].filter((item) => item.id !== action.id),
      };
    }
    case CHANGE_FILLING_POSITION: {
      return {
        ...state,
        filling: action.newFilling,
      };
    }

    default:
      return state;
  }
};
