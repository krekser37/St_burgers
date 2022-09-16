import { TIngredient } from "../types/types";
import { nanoid } from "nanoid";
import { ADD_BUN, ADD_FILLING, DELETE_FILLING,  CHANGE_FILLING_POSITION } from "../constants/burgerConstructor";

export type TBurgerConstructorAction =
IAddToConstructorBun
  | IAddToConstructorFilling
  | IDeleteFromConstructor
  | IChangeFillingPosition
  ;

  export interface IAddToConstructorBun {
    type: typeof ADD_BUN;
    ingredient: TIngredient;
  }

  export interface IAddToConstructorFilling {
    type: typeof ADD_FILLING;
    ingredient: TIngredient;
  }

  export interface IDeleteFromConstructor {
    type: typeof DELETE_FILLING;
    id: string
  }

  export interface IChangeFillingPosition {
    type: typeof CHANGE_FILLING_POSITION;
    dragIndex: number;
    hoverIndex: number
  }

export const addToConstructorBun = (ingredient: TIngredient): IAddToConstructorBun => ({
  type: ADD_BUN,
  ingredient: { ...ingredient },
});

export const addToConstructorFilling = (ingredient: TIngredient): IAddToConstructorFilling => ({
  type: ADD_FILLING,
  ingredient: { ...ingredient, id: nanoid() },
});

export const deleteFromConstructor = (id: string): IDeleteFromConstructor => ({
  type: DELETE_FILLING,
  id,
});

export const changeFillingPosition = (dragIndex: number, hoverIndex: number): IChangeFillingPosition => ({
  type: CHANGE_FILLING_POSITION,
  dragIndex: dragIndex,
  hoverIndex: hoverIndex,
});

