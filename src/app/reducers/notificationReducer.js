import {
  OPEN_INFOBAR,
  CLOSE_INFOBAR,
  GET_LAST_INFOBAR,
  NAVBAR_OPTIONS_SET,
  JOIN_NEWSLETTER_FAIL,
  JOIN_NEWSLETTER_SUCCESS,
  MODAL_INFO_SET,
  MODAL_INFO_RESET,
} from "../types";

const initialState = {
  infoBar: undefined,
  messages: undefined,
  newsletter: undefined,
};

export default function(state = initialState, action) {
    switch (action.type) {
      case NAVBAR_OPTIONS_SET:
        return {
          ...state,
          navBarOptions: action.payload,
        };
      case GET_LAST_INFOBAR:
        return {
          ...state,
          BadgeBanner: action.payload,
        };
      case OPEN_INFOBAR:
        return {
          ...state,
          BadgeBanner: action.payload,
        };
      case CLOSE_INFOBAR:
        return {
          ...state,
          BadgeBanner: undefined,
        };
      case JOIN_NEWSLETTER_SUCCESS:
        return {
          ...state,
          newsletter: true,
        };
      case JOIN_NEWSLETTER_FAIL:
        return {
          ...state,
          newsletter: false,
        };
        case MODAL_INFO_SET:
          return {
            ...state,
            modalInfo: action.payload,
          }
        case MODAL_INFO_RESET:
          return {
            ...state,
            modalInfo: undefined,
          }
      default:
        return state;
    }
}