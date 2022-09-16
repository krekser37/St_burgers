import {
  ADD_BUN,
  ADD_FILLING,
  DELETE_FILLING,
  CHANGE_FILLING_POSITION,
} from "../constants/burgerConstructor";
import update from 'immutability-helper';
import { TBurgerConstructorAction } from "../actions/burgerConstructor";
import { TIngredient } from "../types/types";

type TBurgerConstructorState = {
  bun: TIngredient | null,
  filling: Array<TIngredient>,
  id: string| null,
}

const initialState:TBurgerConstructorState = {
  bun: null,
  filling: [],
  id: "",
};

export const burgerConstructorReducer = (state = initialState, action: TBurgerConstructorAction): TBurgerConstructorState => {
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
          filling: update(state.filling, {
            $splice: [
              [action.dragIndex, 1],
              [action.hoverIndex, 0,
                state.filling[action.dragIndex]],
            ],
          }),
        }
    }

    default:
      return state;
  }
};
