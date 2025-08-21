import {
  USER_CREATE_SUCCESS,
  USER_CREATE_FAIL,
  RETRIEVE_USER_SUCCESS,
  RETRIEVE_USER_FAIL,
} from "../types";

const initialState = {
  redirectTo: undefined,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_CREATE_SUCCESS:
    case RETRIEVE_USER_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        redirectTo: action.redirectTo,
      };
    case USER_CREATE_FAIL:
    case RETRIEVE_USER_FAIL:
      return {
        ...state,
        payload: action.payload,
        redirectTo: action.redirectTo,
      };
    default:
      return state;
  }
}
