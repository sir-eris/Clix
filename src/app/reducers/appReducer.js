import {
    RETRIEVE_APPS_SUCCESS,
    RETRIEVE_APPS_FAIL,
    APP_CREATE_FAIL,
    APP_CREATE_SUCCESS,
    REMOVE_APP_FAIL,
    REMOVE_APP_SUCCESS,
} from "../types";

const initialState = {
  redirectTo: undefined,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RETRIEVE_APPS_SUCCESS:
    case APP_CREATE_SUCCESS:
    case REMOVE_APP_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        redirectTo: action.redirectTo,
      };
    case RETRIEVE_APPS_FAIL:
    case APP_CREATE_FAIL:
    case REMOVE_APP_FAIL:
      return {
        ...state,
        payload: action.payload,
        redirectTo: action.redirectTo,
      };
    default:
      return state;
  }
}
