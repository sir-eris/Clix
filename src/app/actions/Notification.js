import Noty from 'noty'

import {
  OPEN_INFOBAR,
  CLOSE_INFOBAR,
  GET_LAST_INFOBAR,
  NAVBAR_OPTIONS_SET,
  MODAL_INFO_SET,
  MODAL_INFO_RESET,
} from "../types";

export const sendNoty = (text) => (dispatch) => {
    return new Noty({
      type: "success",
      layout: "bottomCenter",
      theme: "metroui",
      text: text,
    }).show();
}

export const loadLastBadgeBanner = () =>  (dispatch) => {
  const lastInfoBar = localStorage.getItem("BadgeBanner");
  dispatch({
    type: GET_LAST_INFOBAR,
    payload: JSON.parse(lastInfoBar) || undefined,
  });
}

export const openBadgeBanner = (data) =>  (dispatch) => {
  localStorage.setItem("BadgeBanner", JSON.stringify(data));
  dispatch({
    type: OPEN_INFOBAR,
    payload: data
  });
}

export const closeBadgeBanner = () =>  (dispatch) => {
  localStorage.removeItem("BadgeBanner");
  dispatch({
    type: CLOSE_INFOBAR,
  });
};

export const setNavBarOptions = (data) => (dispatch) => {
  // dispatch({
  //   type: NAVBAR_OPTIONS_SET,
  //   payload: data
  // });
};


// TODO
export const setModalInfo = (data) => (dispatch) => {
  dispatch({
    type: MODAL_INFO_SET,
    payload: data,
  })
};

export const resetModalInfo = (data) => (dispatch) => {
  dispatch({
    type: MODAL_INFO_RESET,
  })
};
