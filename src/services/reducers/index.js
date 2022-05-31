
import { combineReducers } from 'redux';
import {orderReducer} from "./orderReducer";
import { initialReducer } from './initialReducer';
import { burgerConstructorReducer } from './burgerConstructorReducer';
import { ingredientDetailsReducer } from './IngredientDetailsReducer';

export const rootReducer = combineReducers({
  ingredients: initialReducer,
  burgerConstructor: burgerConstructorReducer,
  order: orderReducer,
  ingredientDetails: ingredientDetailsReducer,
})
