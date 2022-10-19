
import { store } from "../store";
import { Action, ActionCreator } from "redux";
import { ThunkAction/* , ThunkDispatch  */} from "redux-thunk";
import { TIngredientDetailsActions } from "../actions/ingredient-details";
import { TWSActions } from "../actions/wsActions";
import { TBurgerConstructorAction } from "../actions/burgerConstructor";
import { TOrderAction } from "../actions/order";
import { TIngredientsActions } from "../actions/ingredients";
import { TAuthActions } from "../actions/auth";
import { rootReducer } from "../reducers";
/* import 'redux-thunk/extend-redux'; */

type TApplicationActions =  TAuthActions |  TIngredientDetailsActions  | TIngredientsActions | TWSActions | TBurgerConstructorAction | TOrderAction;

export type RootState = ReturnType<typeof rootReducer>;

/* export type AppThunk<ReturnType = Promise<any> |void> = ActionCreator<ThunkAction<
    ReturnType,
    RootState,
    Action,
    TApplicationActions
>>; */

export type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<
    ReturnType,
    RootState,
    Action,
    TApplicationActions
>>;

export type AppDispatch = typeof store.dispatch;
/* export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>; */



