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

export function updateToken() {
  return function (dispatch) {
    dispatch({
      type: TOKEN_REQUEST,
    });
    postUpdateToken()
      .then((res) => {
        const authToken = res.accessToken.split("Bearer ")[1];
        setCookie("token", authToken);
        localStorage.setItem("refreshToken", res.refreshToken);
        dispatch({
          type: TOKEN_SUCCESS,
          success: true,
          message: "Successful token",
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

export function logOut() {
  return function (dispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    postApiLogout()
      .then((res) => {
        deleteCookie("token");
        localStorage.removeItem("refreshToken", res.refreshToken);
        if (res && res.success) {
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

export function getUser() {
  return function (dispatch) {
    dispatch({
      type: GET_USER_REQUEST,
    });
    getApiUser()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_USER_SUCCESS,
            payload: res.user,
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

export function registration(name, email, password) {
  return function (dispatch) {
    dispatch({
      type: REGISTRATION_REQUEST,
    });
    postApiRegistration(name, email, password)
      .then((res) => {
        if (res && res.success) {
          const authToken = res.accessToken.split("Bearer ")[1];
          setCookie("token", authToken);
          localStorage.setItem("refreshToken", res.refreshToken);
          dispatch({
            type: REGISTRATION_SUCCESS,
            success: "true",
            payload: res.user,
            /* user: {
              email: "",
              name: "",
            },
            accessToken: "Bearer ...",
            refreshToken: "", */
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

export function updateRegistration(name, email, password) {
  return function (dispatch) {
    dispatch({
      type: UPDATE_REGISTRATION_REQUEST,
    });
    patchApiRegistration(name, email, password)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: UPDATE_REGISTRATION_SUCCESS,
            success: "true",
            payload: res.user,
            /* user: {
              email: "",
              name: "",
            },
            accessToken: "Bearer ...",
            refreshToken: "", */
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

export function authorization(email, password) {
  return function (dispatch) {
    dispatch({
      type: AUTORISATION_REQUEST,
    });
    postApiAutorisation(email, password)
      .then((res) => {
        const authToken = res.accessToken.split("Bearer ")[1];
        setCookie("token", authToken);
        localStorage.setItem("refreshToken", res.refreshToken);
        if (res && res.success) {
          dispatch({
            type: AUTORISATION_SUCCESS,
            success: "true",
            user: res.user,
            /* accessToken: "Bearer ...",
            refreshToken: "", */
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

export function forgotPassword(emailValue) {
  return function (dispatch) {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
    });
    getApiForgotPassword(emailValue)
      .then((res) => {
        if (res && res.success) {
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

export function resetPassword(password, token) {
  return function (dispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST,
    });
    getApiResetPassword(password, token)
      .then((res) => {
        if (res && res.success) {
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
