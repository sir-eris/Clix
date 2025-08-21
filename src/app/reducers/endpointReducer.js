import {
  ENDPOINT_CREATE_SUCCESS,
  ENDPOINT_CREATE_FAIL,
  RETRIEVE_ENDPOINTS_SUCCESS,
  RETRIEVE_ENDPOINTS_FAIL,
  REMOVE_ENDPOINT_SUCCESS,
  REMOVE_ENDPOINT_FAIL,
  RETRIEVE_ENDPOINT_SUCCESS,
  RETRIEVE_ENDPOINT_FAIL,
  UPDATE_ENDPOINT_SUCCESS,
  UPDATE_ENDPOINT_FAIL,
  RETRIEVE_ENDPOINTS_VALIDATIONS_FAIL,
  RETRIEVE_ENDPOINTS_VALIDATIONS_SUCCESS,
} from "../types";

const initialState = {
  redirectTo: undefined,
  editing: undefined,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ENDPOINT_CREATE_SUCCESS:
      return {
        ...state,
        new: action.payload,
        redirectTo: action.redirectTo,
      }
    case RETRIEVE_ENDPOINTS_SUCCESS:
    case REMOVE_ENDPOINT_SUCCESS:
      return {
        ...state,
        editing: undefined,
        payload: action.payload,
        redirectTo: action.redirectTo,
      };
    case RETRIEVE_ENDPOINTS_VALIDATIONS_FAIL:
      return {
        ...state,
        requestValidations: action.payload,
      }
    case RETRIEVE_ENDPOINTS_VALIDATIONS_SUCCESS :
      return {
        ...state,
        requestValidations: action.payload,
      }
    case RETRIEVE_ENDPOINT_SUCCESS:
      return {
        ...state,
        editing: action.payload,
      };
    case UPDATE_ENDPOINT_SUCCESS:
      return {
        ...state,
        editing: undefined,
        redirectTo: action.redirectTo,
      };
    case ENDPOINT_CREATE_FAIL:
    case RETRIEVE_ENDPOINTS_FAIL:
    case REMOVE_ENDPOINT_FAIL:
    case RETRIEVE_ENDPOINT_FAIL:
    case UPDATE_ENDPOINT_FAIL:
      return {
        ...state,
        payload: action.payload,
        redirectTo: action.redirectTo,
      };
    default:
      return state;
  }
}
