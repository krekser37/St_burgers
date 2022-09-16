
import { store } from "../store";
import { Action, ActionCreator } from "redux";
import { ThunkAction/* , ThunkDispatch  */} from "redux-thunk";
import { TIngredientDetailsActions } from "../actions/ingredient-details";
import { TWSActions } from "../actions/wsActions";
import { TBurgerConstructor } from "../actions/burgerConstructor";
import { TOrderAction } from "../actions/order";
import { TIngredientsActions } from "../actions/ingredients";
import { TAuthActions } from "../actions/auth";

type TApplicationActions =  TAuthActions |  TIngredientDetailsActions  | TIngredientsActions | TWSActions | TBurgerConstructor | TOrderAction;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = Promise<any> |void> = ActionCreator<ThunkAction<
    ReturnType,
    RootState,
    Action,
    TApplicationActions
>>;

export type AppDispatch = typeof store.dispatch;
/* export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>; */