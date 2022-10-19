  // hooks.ts
import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook
  } from 'react-redux';
  import { AppDispatch, AppThunk, RootState } from './types';
  
/*   import 'redux-thunk/extend-redux'; */
  
  // Теперь этот хук знает структуру хранилища
  export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook;
  
  // Хук не даст отправить экшен, который ему не знаком
  export const useAppDispatch = () => dispatchHook<AppDispatch & AppThunk>();