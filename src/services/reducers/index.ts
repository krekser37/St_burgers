
import { combineReducers } from 'redux';
import {orderReducer} from "./orderReducer";
import { initialReducer } from './ingredientsReducer';
import { burgerConstructorReducer } from './burgerConstructorReducer';
import { ingredientDetailsReducer } from './IngredientDetailsReducer';
import { authReducer } from './auth';
import { wsReducer } from './wsReducer';

export const rootReducer = combineReducers({
  ingredients: initialReducer,
  burgerConstructor: burgerConstructorReducer,
  order: orderReducer,
  ingredientDetails: ingredientDetailsReducer,
  auth: authReducer,
  wsOrders: wsReducer,
})
