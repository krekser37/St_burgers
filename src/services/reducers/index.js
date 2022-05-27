
import { combineReducers } from 'redux';
import {selectedIngredientsReducer} from "./selectedIngredientsReducer";
import {orderReducer} from "./orderReducer";
import { initialReducer } from './initialReducer';

const currentIngredients = {};

const createdOrder = {};

export const rootReducer = combineReducers({
  ingredients: initialReducer,
/*   selected: selectedIngredientsReducer,
  order: orderReducer, */
})
