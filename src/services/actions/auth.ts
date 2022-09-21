
import {
  getApiForgotPassword,
  getApiResetPassword,
  postApiRegistration,
  getApiUser,
  postApiAutorisation,
  postApiLogout,
  postUpdateToken,
  patchApiRegistration,
} from "../../utils/burger-api";
import { setCookie, deleteCookie } from "../../utils/cookie";
import {
  TOKEN_REQUEST,
  TOKEN_SUCCESS,
  TOKEN_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
  UPDATE_REGISTRATION_REQUEST,
  UPDATE_REGISTRATION_SUCCESS,
  UPDATE_REGISTRATION_FAILED,
  AUTORISATION_REQUEST,
  AUTORISATION_SUCCESS,
  AUTORISATION_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED
} from "../constants/auth";
import { AppDispatch, AppThunk } from "../types";
import { TAuth, TUser } from "../types/types";

export type TAuthActions =
  ITokenRequest
  | ITokenSuccess
  | ITokenFailed
  | ILogoutRequest
  | ILogoutSuccess
  | ILogoutFailed
  | IGetUserRequest
  | IGetUserSuccess
  | IGetUserFailed
  | IRegistrationRequest
  | IRegistrationSuccess
  | IRegistrationFailed
  | IUpdateRegistrationRequest
  | IUpdateRegistrationSuccess
  | IUpdateRegistrationFailed
  | IAutorisationRequest
  | IAutorisationSuccess
  | IAutorisationFailed
  | IForgotPasswordRequest
  | IForgotPasswordSuccess
  | IForgotPasswordFailed
  | IResetPasswordRequest
  | IResetPasswordSuccess
  | IResetPasswordFailed
  ;

export interface ITokenRequest {
  readonly type: typeof TOKEN_REQUEST;
/*   readonly success: boolean;
  readonly message: string; */
}

export interface ITokenSuccess {
  readonly type: typeof TOKEN_SUCCESS;
}

export interface ITokenFailed {
  readonly type: typeof TOKEN_FAILED;
  readonly payload: string,
}

export const updateToken: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: TOKEN_REQUEST,
    });
    postUpdateToken()
      .then((res) => {
        console.log(res);
        const authToken = res.accessToken.split("Bearer ")[1];
        setCookie("token", authToken);
        localStorage.setItem("refreshToken", res.refreshToken);
        dispatch({
          type: TOKEN_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch({
          type: TOKEN_FAILED,
          payload: err,
        });
      });
  };
}

export interface ILogoutRequest {
  readonly type: typeof LOGOUT_REQUEST;
}

export interface ILogoutSuccess {
  readonly type: typeof LOGOUT_SUCCESS;
  success: boolean,
  message: string,
}

export interface ILogoutFailed {
  readonly type: typeof LOGOUT_FAILED;
}

export const logOut: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    postApiLogout()
      .then((res) => {
        deleteCookie("token");
        localStorage.removeItem("refreshToken");
        if (res /*&&  res.success */) {
          dispatch({
            type: LOGOUT_SUCCESS,
            success: true,
            message: "Successful logout",
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: LOGOUT_FAILED,
          payload: err,
        });
      });
  };
}

export interface IGetUserRequest {
  readonly type: typeof GET_USER_REQUEST;
}

export interface IGetUserSuccess {
  readonly type: typeof GET_USER_SUCCESS;
  readonly success : string,
  readonly payload: TUser; 
}

export interface IGetUserFailed {
  readonly type: typeof GET_USER_FAILED;
  readonly payload: string,
}


export const getUser: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_USER_REQUEST,
    });
    getApiUser()
      .then((res) => {
        if (res) {
          dispatch({
            type: GET_USER_SUCCESS,
            success: "get user success true",
            payload: res,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_USER_FAILED,
          payload: err,
        });
      });
  };
}

export interface IRegistrationRequest {
  readonly type: typeof REGISTRATION_REQUEST;
}

export interface IRegistrationSuccess {
  readonly type: typeof REGISTRATION_SUCCESS;
  readonly success: string;
  readonly payload: TAuth;
}

export interface IRegistrationFailed {
  readonly type: typeof REGISTRATION_FAILED;
  readonly payload: string,
}


export const registration: AppThunk = (name: string, email: string, password: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: REGISTRATION_REQUEST,
    });
    postApiRegistration(name, email, password)
      .then((res) => {
        console.log(res);
        if (res) {
          const authToken = res.accessToken.split("Bearer ")[1];
          setCookie("token", authToken);
          localStorage.setItem("refreshToken", res.refreshToken);
          dispatch({
            type: REGISTRATION_SUCCESS,
            success: "true",
            payload: res,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: REGISTRATION_FAILED,
          payload: err,
        });
      });
  };
}

export interface IUpdateRegistrationRequest {
  readonly type: typeof UPDATE_REGISTRATION_REQUEST;
}

export interface IUpdateRegistrationSuccess {
  readonly type: typeof UPDATE_REGISTRATION_SUCCESS;
  readonly success: string;
  readonly payload: TAuth;
}

export interface IUpdateRegistrationFailed {
  readonly type: typeof UPDATE_REGISTRATION_FAILED;
}

export const updateRegistration: AppThunk = (name: string , email: string, password: string ) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: UPDATE_REGISTRATION_REQUEST,
    });
    patchApiRegistration(name, email, password)
      .then((res) => {
        console.log(res);
        if (res) {
          dispatch({
            type: UPDATE_REGISTRATION_SUCCESS,
            success: "true",
            payload: res,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: UPDATE_REGISTRATION_FAILED,
          payload: err,
        });
      });
  };
}

export interface IAutorisationRequest {
  readonly type: typeof AUTORISATION_REQUEST;
}

export interface IAutorisationSuccess {
  readonly type: typeof AUTORISATION_SUCCESS;
  readonly success : string,
  readonly payload: TAuth,
}

export interface IAutorisationFailed {
  readonly type: typeof AUTORISATION_FAILED;
  readonly payload: string,
}

export const authorization: AppThunk = (email: string, password: string)=> {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: AUTORISATION_REQUEST,
    });
    postApiAutorisation(email, password)
      .then((res) => {
        const authToken = res.accessToken.split("Bearer ")[1];
        setCookie("token", authToken);
        localStorage.setItem("refreshToken", res.refreshToken);
        if (res /* && res.success */) {
          dispatch({
            type: AUTORISATION_SUCCESS,
            success: "true",
            payload: res,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: AUTORISATION_FAILED,
          payload: err,
        });
      });
  };
}

export interface IForgotPasswordRequest {
  readonly type: typeof FORGOT_PASSWORD_REQUEST;
}

export interface IForgotPasswordSuccess {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS;
}

export interface IForgotPasswordFailed {
  readonly type: typeof FORGOT_PASSWORD_FAILED;
}

export const forgotPassword: AppThunk = (emailValue: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
    });
    getApiForgotPassword(emailValue)
      .then((res) => {
        if (res /* && res.success */) {
          dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            success: "true",
            message: "Reset email sent",
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: FORGOT_PASSWORD_FAILED,
          payload: err,
        });
      });
  };
}

export interface IResetPasswordRequest {
  readonly type: typeof RESET_PASSWORD_REQUEST;
}

export interface IResetPasswordSuccess {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
}

export interface IResetPasswordFailed {
  readonly type: typeof RESET_PASSWORD_FAILED;
}

export const resetPassword: AppThunk = (password:string, token) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST,
    });
    getApiResetPassword(password, token)
      .then((res) => {
        if (res /* && res.success */) {
          dispatch({
            type: RESET_PASSWORD_SUCCESS,
            success: "true",
            message: "Password successfully reset",
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: RESET_PASSWORD_FAILED,
          payload: err,
        });
      });
  };
} 
