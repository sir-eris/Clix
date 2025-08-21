import {
  MODEL_CREATE_SUCCESS,
  MODEL_CREATE_FAIL,
  RETRIEVE_MODELS_SUCCESS,
  RETRIEVE_MODELS_FAIL,
  REMOVE_MODEL_SUCCESS,
  REMOVE_MODEL_FAIL,
  REMOVE_MODEL_FIELD_SUCCESS,
  REMOVE_MODEL_FIELD_FAIL,
  RETRIEVE_MODEL_SUCCESS,
  RETRIEVE_MODEL_FAIL,
  UPDATE_MODEL_FAIL,
  UPDATE_MODEL_SUCCESS,
  RETRIEVE_FOREIGN_KEYS_FAIL,
  RETRIEVE_FOREIGN_KEYS_SUCCESS,
} from "../types";

const initialState = {
  redirectTo: undefined,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MODEL_CREATE_SUCCESS:
    case RETRIEVE_MODELS_SUCCESS:
    case REMOVE_MODEL_FIELD_SUCCESS:
      return {
        ...state,
        editing: undefined,
        payload: action.payload,
        redirectTo: action.redirectTo,
      };
    case REMOVE_MODEL_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        redirectTo: action.redirectTo,
      };
    case MODEL_CREATE_FAIL:
    case RETRIEVE_MODELS_FAIL:
    case REMOVE_MODEL_FAIL:
    case REMOVE_MODEL_FIELD_FAIL:
      return {
        ...state,
        editing: undefined,
        payload: action.payload,
        redirectTo: action.redirectTo,
      };
      case RETRIEVE_MODEL_SUCCESS:
      case RETRIEVE_MODEL_FAIL:
        return {
          ...state,
          editing: action.payload,
          redirectTo: action.redirectTo,
        }
      case UPDATE_MODEL_FAIL:
        return {
          ...state,
          payload: action.payload,
          redirectTo: action.redirectTo,
        }
      case UPDATE_MODEL_SUCCESS:
        return {
          ...state,
          editing: undefined,
          payload: action.payload,
          redirectTo: action.redirectTo,
        };
      case RETRIEVE_FOREIGN_KEYS_FAIL:
        return {
          ...state,
          foreignKeys: [],
        }
      case RETRIEVE_FOREIGN_KEYS_SUCCESS:
        return {
          ...state,
          foreignKeys: action.payload,
        }
    default:
      return state;
  }
}
