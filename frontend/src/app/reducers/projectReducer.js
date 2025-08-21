import {
  PROJECT_CREATE_SUCCESS,
  PROJECT_CREATE_FAIL,
  RETRIEVE_PROJECTS_SUCCESS,
  RETRIEVE_PROJECTS_FAIL,
  RETRIEVE_PROJECT_SUCCESS,
  RETRIEVE_PROJECT_FAIL,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAIL,
  REMOVE_PROJECT_SUCCESS,
  REMOVE_PROJECT_FAIL,
  ACTIVATE_PROJECT_SUCCESS,
  ACTIVATE_PROJECT_FAIL,
  UPDATE_PROJECT_SETTINGS_FAIL,
  UPDATE_PROJECT_SETTINGS_SUCCESS,
  RETRIEVE_PROJECT_SETTINGS_FAIL,
  RETRIEVE_PROJECT_SETTINGS_SUCCESS,
  RETRIEVE_TEMPLATES_FAIL,
  RETRIEVE_TEMPLATES_SUCCESS,
  REMOVE_TEMPLATE_FAIL,
  REMOVE_TEMPLATE_SUCCESS,
  CREATE_TEMPLATE_FAIL,
  CREATE_TEMPLATE_SUCCESS,
  CREATE_PROJECT_FROM_TEMPLATE_FAIL,
  CREATE_PROJECT_FROM_TEMPLATE_SUCCESS,
  ADD_SHARE_TEMPLATE_FAIL,
  ADD_SHARE_TEMPLATE_SUCCESS,
  UPDATE_TEMPLATE_FAIL,
  UPDATE_TEMPLATE_SUCCESS,
} from "../types";

const initialState = {
  redirectTo: undefined,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_PROJECT_SUCCESS:
    case UPDATE_TEMPLATE_SUCCESS:
    case UPDATE_TEMPLATE_FAIL:
    case UPDATE_PROJECT_FAIL:
      return {
        ...state,
        payload: action.payload.projects,
        templates: action.payload.templates,
        redirectTo: action.redirectTo,
      };

    case PROJECT_CREATE_SUCCESS:
    case RETRIEVE_PROJECTS_SUCCESS:
    case RETRIEVE_PROJECT_SUCCESS:
    case REMOVE_PROJECT_SUCCESS:
    case CREATE_PROJECT_FROM_TEMPLATE_FAIL:
    case CREATE_PROJECT_FROM_TEMPLATE_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        redirectTo: action.redirectTo,
      };
    case ACTIVATE_PROJECT_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        redirectTo: action.redirectTo,
      };
    case ACTIVATE_PROJECT_FAIL:
      return {
        ...state,
        redirectTo: action.redirectTo,
      };
    case PROJECT_CREATE_FAIL:
    case RETRIEVE_PROJECTS_FAIL:
    case RETRIEVE_PROJECT_FAIL:

    case REMOVE_PROJECT_FAIL:
      return {
        ...state,
        payload: action.payload,
        redirectTo: action.redirectTo,
      };
    case UPDATE_PROJECT_SETTINGS_FAIL:
    case UPDATE_PROJECT_SETTINGS_SUCCESS:
      return {
        ...state,
        settings: action.payload,
        updatedSettings: action.payload,
        redirectTo: action.redirectTo,
      };
    case RETRIEVE_PROJECT_SETTINGS_FAIL:
    case RETRIEVE_PROJECT_SETTINGS_SUCCESS:
      return {
        ...state,
        settings: action.payload,
        redirectTo: action.redirectTo,
      };
    case RETRIEVE_TEMPLATES_FAIL:
    case RETRIEVE_TEMPLATES_SUCCESS:
    case REMOVE_TEMPLATE_FAIL:
    case REMOVE_TEMPLATE_SUCCESS:
    case CREATE_TEMPLATE_FAIL:
    case ADD_SHARE_TEMPLATE_FAIL:
    case ADD_SHARE_TEMPLATE_SUCCESS:
      return {
        ...state,
        templates: action.payload,
        redirectTo: action.redirectTo,
      };
    case CREATE_TEMPLATE_SUCCESS:
      return {
        ...state,
        payload: action.payload["projects"],
        templates: action.payload["templates"],
        redirectTo: action.redirectTo,
      };
    default:
      return state;
  }
}
