import { TAuthActions } from "../actions/auth";
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
  RESET_PASSWORD_FAILED,
} from "../constants/auth";
import { TUser } from "../types/types";



type TAuthState ={
  user: TUser | null,

  tokenRequest:boolean,
  tokenFailed: boolean,
  tokenSuccess: boolean,

  logoutRequest:boolean,
  logoutFailed: boolean,
  logoutSuccess: boolean,

  getUserRequest: boolean,
  getUserSuccess: boolean,
  getUserFailed: boolean,

  registrationRequest: boolean,
  registrationFailed: boolean,
  registrationSuccess: boolean,

  updateregistrationRequest: boolean,
  updateregistrationFailed: boolean,
  updateregistrationSuccess: boolean,

  autorisationRequest: boolean,
  autorisationFailed: boolean,
  autorisationSuccess: boolean,

  forgotPasswordRequest: boolean,
  forgotPasswordFailed: boolean,
  forgotPasswordSuccess: boolean,

  resetPasswordRequest: boolean,
  resetPasswordFailed: boolean,
  resetPasswordSuccess: boolean,
}

const initialState: TAuthState = {
  user: null,

  tokenRequest:false,
  tokenFailed: false,
  tokenSuccess: false,

  logoutRequest:false,
  logoutFailed: false,
  logoutSuccess: false,

  getUserRequest: false,
  getUserSuccess: false,
  getUserFailed: false,

  registrationRequest: false,
  registrationFailed: false,
  registrationSuccess: false,

  updateregistrationRequest: false,
  updateregistrationFailed: false,
  updateregistrationSuccess: false,

  autorisationRequest: false,
  autorisationFailed: false,
  autorisationSuccess: false,

  forgotPasswordRequest: false,
  forgotPasswordFailed: false,
  forgotPasswordSuccess: false,

  resetPasswordRequest: false,
  resetPasswordFailed: false,
  resetPasswordSuccess: false,
};

export const authReducer = (state = initialState, action: TAuthActions): TAuthState => {
  switch (action.type) {

    case TOKEN_REQUEST: {
      return {
        ...state,
        tokenRequest: true,
        tokenFailed: false,
      };
    }
    case TOKEN_SUCCESS: {
      return {
        ...state,
        tokenFailed: false,
        tokenRequest: false,
      };
    }
    case TOKEN_FAILED: {
      return {
        ...state,
        tokenRequest: false,
        tokenFailed: true,
      };
    }

    case LOGOUT_REQUEST: {
      return {
        ...state,
        logoutRequest: true,
        logoutFailed: false,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        logoutFailed: false,
        logoutSuccess: true,
        logoutRequest: false,

      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        logoutRequest: false,
        logoutFailed: true,
      };
    }

    case GET_USER_REQUEST: {
      return {
        ...state,
        getUserRequest: true,
        getUserFailed: false,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        getUserFailed: false,
        getUserSuccess: true,
        user: action.payload.user, 
        getUserRequest: false,
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        getUserRequest: false,
        getUserFailed: true,
      };
    }

    case UPDATE_REGISTRATION_REQUEST: {
      return {
        ...state,
        updateregistrationRequest: true,
        updateregistrationFailed: false,
      };
    }
    case UPDATE_REGISTRATION_SUCCESS: {
      return {
        ...state,
        updateregistrationFailed: false,
        updateregistrationSuccess: true,
        user: action.payload, 
        updateregistrationRequest: false,
      };
    }
    case UPDATE_REGISTRATION_FAILED: {
      return {
        ...state,
        updateregistrationRequest: false,
        updateregistrationFailed: true,
      };
    }


    case REGISTRATION_REQUEST: {
      return {
        ...state,
        registrationRequest: true,
        registrationFailed: false,
      };
    }
    case REGISTRATION_SUCCESS: {
      return {
        ...state,
        registrationFailed: false,
        user: action.payload.user, 
        registrationRequest: false,
        /* registrationSuccess: true, */
      };
    }
    case REGISTRATION_FAILED: {
      return {
        ...state,
        registrationRequest: false,
        registrationFailed: true,
      };
    }

    case AUTORISATION_REQUEST: {
      return {
        ...state,
        autorisationRequest: true,
        autorisationFailed: false,
      };
    }
    case AUTORISATION_SUCCESS: {
      return {
        ...state,
        autorisationFailed: false,
        user: action.payload.user, 
        autorisationRequest: false,
        autorisationSuccess: true,

      };
    }
    case AUTORISATION_FAILED: {
      return {
        ...state,
        autorisationRequest: false,
        autorisationFailed: true,
      };
    }

    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        forgotPasswordRequest: true,
        forgotPasswordFailed: false,
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordFailed: false,
        forgotPasswordSuccess: true,
      };
    }
    case FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordFailed: true,
      };
    }

    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        resetPasswordRequest: true,
        resetPasswordFailed: false,
      };
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordFailed: false,
        resetPasswordSuccess: true,
      };
    }
    case RESET_PASSWORD_FAILED: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordFailed: true,
      };
    }

    default:
      return state;
  }
};
