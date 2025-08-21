import {
  ACCOUNT_LOAD_SUCCESS,
  ACCOUNT_LOAD_FAIL,
  ACCOUNT_UPDATE_SUCCESS,
  ACCOUNT_UPDATE_FAIL,
  ACCOUNT_THUMBNAIL_REMOVE_SUCCESS,
  ACCOUNT_THUMBNAIL_REMOVE_FAIL,
  ACCOUNT_THUMBNAIL_UPDATE_FAIL,
  ACCOUNT_THUMBNAIL_UPDATE_SUCCESS,
  JOIN_TEAM_FAIL,
  JOIN_TEAM_SUCCESS,
  CREATE_NEW_TEAM_FAIL,
  CREATE_NEW_TEAM_SUCCESS,
} from "../types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACCOUNT_LOAD_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        redirectTo: action.redirectTo,
      };
    case ACCOUNT_UPDATE_SUCCESS:
      return {
        ...state,
        updated: action.updated,
        payload: action.payload,
        redirectTo: action.redirectTo,
      };
    case ACCOUNT_LOAD_FAIL:
    case ACCOUNT_UPDATE_FAIL:
      return {
        ...state,
        payload: action.payload,
        redirectTo: action.redirectTo,
      };
    case ACCOUNT_THUMBNAIL_REMOVE_SUCCESS:
    case ACCOUNT_THUMBNAIL_UPDATE_SUCCESS:
    case ACCOUNT_THUMBNAIL_REMOVE_FAIL:
    case ACCOUNT_THUMBNAIL_UPDATE_FAIL:
      return {
        ...state,
        payload: {
          ...state.payload,
          thumbnail: action.thumbnail,
        },
      };
    case JOIN_TEAM_FAIL:
    case JOIN_TEAM_SUCCESS:
    case CREATE_NEW_TEAM_FAIL:
    case CREATE_NEW_TEAM_SUCCESS:
      return {
        ...state,
        teams: action.payload,
        redirectTo: action.redirectTo,
        responseStatus: action.responseStatus,
      };
    default:
      return state;
  }
}
