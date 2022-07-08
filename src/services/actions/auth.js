import {
  getApiForgotPassword,
  getApiResetPassword,
  getApiRegistration,
} from "../../components/utils/burger-api";

export const REGISTRATION_REQUEST = "REGISTRATION_REQUEST";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILED = "REGISTRATION_FAILED";

export function registration(email, password, name) {
  return function (dispatch) {
    dispatch({
      type: REGISTRATION_REQUEST,
    });
    /* const ids = orderIngredients.map((ingredient) => ingredient._id); */
    /* console.log(ids); */
    getApiRegistration(email, password, name)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: REGISTRATION_SUCCESS,
            success: "true",
            user: {
              email: "",
              name: "",
            },
            accessToken: "Bearer ...",
            refreshToken: "",
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

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILED = "FORGOT_PASSWORD_FAILED";

export function forgotPassword(emailValue) {
  return function (dispatch) {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
    });
    /* const ids = orderIngredients.map((ingredient) => ingredient._id); */
    /* console.log(ids); */
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

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILED = "RESET_PASSWORD_FAILED";

export function resetPassword(password, token) {
  return function (dispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST,
    });
    /* const ids = orderIngredients.map((ingredient) => ingredient._id); */
    /* console.log(ids); */
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
