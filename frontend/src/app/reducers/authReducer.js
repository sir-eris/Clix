import {
  AUTH_LOADING,
  AUTH_LOADED,
  AUTH_ERROR,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAIL,
  AUTH_LOGOUT_SUCCESS,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAIL,
  PASSWORD_FORGOT_0_FAIL,
  PASSWORD_FORGOT_0_SUCCESS,
  PASSWORD_FORGOT_1_FAIL,
  PASSWORD_FORGOT_1_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PASSWORD_SUCCESS,
  CONTACT_FAIL,
  CONTACT_SUCCESS,
  JOIN_NEWSLETTER_FAIL,
  JOIN_NEWSLETTER_SUCCESS,
  UNSUBSCRIBE_NEWSLETTER_FAIL,
  UNSUBSCRIBE_NEWSLETTER_SUCCESS,
  CHECK_VISITED_PAGE_FAIL,
  CHECK_VISITED_PAGE_SUCCESS,
  RETRIEVE_FAQS_FAIL,
  RETRIEVE_FAQS_SUCCESS,
  ASK_FAQ_FAIL,
  ASK_FAQ_SUCCESS,
} from "../types";

const initialState = {
  isLoading: false,
  redirectTo: undefined,
  isAuthenticated: undefined,
  access: localStorage.getItem("access") || undefined,
  refresh: localStorage.getItem("refresh") || undefined,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        isLoading: true,
        redirectTo: undefined,
      };
    case AUTH_LOADED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        payload: action.payload,
        redirectTo: action.redirectTo,
      };
    case AUTH_LOGIN_SUCCESS:
    case AUTH_REGISTER_SUCCESS:
      localStorage.setItem("access", action.payload.access_token);
      localStorage.setItem("refresh", action.payload.refresh_token);
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        firstLogin: action.payload.first_login,
        access: action.payload.access_token,
        refresh: action.payload.refresh_token,
        authSentTempCode: undefined,
        authResetPassword: undefined,
        loginError: undefined,
        redirectTo: action.redirectTo,
      };
    case AUTH_ERROR:
      return {
        ...state,
        isLoading: false,
        redirectTo: undefined,
        isAuthenticated: false,
      };
    case AUTH_LOGIN_FAIL:
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return {
        ...state,
        access: undefined,
        refresh: undefined,
        isLoading: false,
        isAuthenticated: false,
        loginError: true,
        redirectTo: action.redirectTo,
      };
    case AUTH_REGISTER_FAIL:
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return {
        ...state,
        access: undefined,
        refresh: undefined,
        isLoading: false,
        isAuthenticated: false,
        registerError: true,
        statusCode: action.statusCode,
        redirectTo: action.redirectTo,
      };
    case AUTH_LOGOUT_SUCCESS:
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return {
        ...state,
        access: undefined,
        refresh: undefined,
        isLoading: false,
        isAuthenticated: false,
        redirectTo: action.redirectTo,
      };
    case PASSWORD_FORGOT_0_SUCCESS:
      return {
        ...state,
        authSentTempCode: action.payload,
        redirectTo: action.redirectTo,
      };
    case PASSWORD_FORGOT_1_SUCCESS:
      return {
        ...state,
        authSentTempCode: false,
        authResetPassword: action.payload,
        redirectTo: action.redirectTo,
      };
    case PASSWORD_FORGOT_0_FAIL:
      return {
        ...state,
        authSentTempCode: false,
        authResetPassword: false,
        redirectTo: action.redirectTo,
      };
    case PASSWORD_FORGOT_1_FAIL:
      return {
        ...state,
        authSentTempCode: true,
        authResetPassword: false,
        redirectTo: action.redirectTo,
      };
    case UPDATE_PASSWORD_FAIL:
      return {
        ...state,
        passwordUpdated: action.payload,
        redirectTo: action.redirectTo,
      };
    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        passwordUpdated: action.payload,
        redirectTo: action.redirectTo,
      };
    case CONTACT_FAIL:
      return {
        ...state,
        contactSuccess: action.payload,
      };
    case CONTACT_SUCCESS:
      return {
        ...state,
        contactSuccess: action.payload,
      };
    case CHECK_VISITED_PAGE_FAIL:
      return {
        ...state,
        pages_visited: false,
      };
    case CHECK_VISITED_PAGE_SUCCESS:
      return {
        ...state,
        pages_visited: true,
      };
    case JOIN_NEWSLETTER_FAIL:
    case JOIN_NEWSLETTER_SUCCESS:
      return {
        ...state,
        newsletter: action.payload,
        redirectTo: action.redirectTo,
      };
    case UNSUBSCRIBE_NEWSLETTER_FAIL:
    case UNSUBSCRIBE_NEWSLETTER_SUCCESS:
      return {
        ...state,
        newsletter: action.payload,
        redirectTo: action.redirectTo,
      };
    case RETRIEVE_FAQS_FAIL:
    case RETRIEVE_FAQS_SUCCESS:
      return {
        ...state,
        faqs: action.payload,
      };
    case ASK_FAQ_FAIL:
    case ASK_FAQ_SUCCESS:
      return {
        ...state,
        askFAQ: action.payload,
      };
    default:
      return state;
  }
}
