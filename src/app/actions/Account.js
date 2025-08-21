import axios from "axios";
import { tokenConfig } from "../utils";

import {
  ACCOUNT_LOAD_SUCCESS,
  ACCOUNT_LOAD_FAIL,
  ACCOUNT_UPDATE_SUCCESS,
  ACCOUNT_UPDATE_FAIL,
  ACCOUNT_THUMBNAIL_REMOVE_SUCCESS,
  ACCOUNT_THUMBNAIL_REMOVE_FAIL,
  ACCOUNT_THUMBNAIL_UPDATE_SUCCESS,
  ACCOUNT_THUMBNAIL_UPDATE_FAIL,
  JOIN_TEAM_FAIL,
  JOIN_TEAM_SUCCESS,
  CREATE_NEW_TEAM_FAIL,
  CREATE_NEW_TEAM_SUCCESS,
} from "../types";

const BASE_URL = false
  ? "https://api.clix.dev/api/webapp/account"
  : "http://localhost:8000/api/webapp/account";

// get account info
export const loadAccount = () => (dispatch, getState) => {
  axios
    .get(BASE_URL, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: res.data === false ? ACCOUNT_LOAD_FAIL : ACCOUNT_LOAD_SUCCESS,
        payload: res.data,
        redirectTo: undefined,
      });
    })
    .catch((err) => {
      dispatch({
        type: ACCOUNT_LOAD_FAIL,
        payload: false,
        thumbnail: null,
        redirectTo: undefined,
      });
    });
};

// update account
export const updateAccount = (data) => (dispatch, getState) => {
  const payload = {
    first_name: data["firstName"],
    last_name: data["lastName"],
    email: data["email"],
    // phone: data['phone'],
    // github: data['github'],
    // twitter: data['twitter'],
  };

  axios
    .put(BASE_URL, payload, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: res.data === false ? ACCOUNT_UPDATE_FAIL : ACCOUNT_UPDATE_SUCCESS,
        updated: res.data === false ? false : true,
        payload: res.data,
        redirectTo: undefined,
      });
    })
    .catch((err) => {
      dispatch({
        type: ACCOUNT_UPDATE_FAIL,
        payload: false,
        redirectTo: undefined,
      });
    });
};

// remove thumbnail
export const removeThumbnail = () => (dispatch, getState) => {
  axios
    .delete(BASE_URL + "/thumbnail", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type:
          res.data === false
            ? ACCOUNT_THUMBNAIL_REMOVE_FAIL
            : ACCOUNT_THUMBNAIL_REMOVE_SUCCESS,
        thumbnail: res.data.thumbnail,
        redirectTo: undefined,
      });
    })
    .catch((err) => {
      dispatch({
        type: ACCOUNT_THUMBNAIL_REMOVE_FAIL,
        thumbnail: err,
        redirectTo: undefined,
      });
    });
};

// update thumbnail
export const updateThumbnail = (data) => (dispatch, getState) => {
  let formData = new FormData();
  formData.append("file", data.file);

  axios
    .post(BASE_URL + "/thumbnail", formData, {
      headers: {
        ...tokenConfig(getState).headers,
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      dispatch({
        type:
          res.data === false
            ? ACCOUNT_THUMBNAIL_UPDATE_FAIL
            : ACCOUNT_THUMBNAIL_UPDATE_SUCCESS,
        thumbnail: res.data.thumbnail,
        redirectTo: undefined,
      });
    })
    .catch((err) => {
      dispatch({
        type: ACCOUNT_THUMBNAIL_UPDATE_FAIL,
        payload: false,
        redirectTo: undefined,
      });
    });
};

// verify email
export const sendVerifyEmail = () => (dispatch, getState) => {
  axios
    .get(BASE_URL + "/send-verify-email", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: res.data === false ? 0 : 1,
        redirectTo: undefined,
      });
    })
    .catch((err) => {
      dispatch({
        type: 0,
        redirectTo: undefined,
      });
    });
};

// join a team for first time
export const joinTeam = (teamId) => (dispatch, getState) => {
  axios
    .post(BASE_URL + "/team/join", { team_id: teamId }, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: res.data === false ? JOIN_TEAM_FAIL : JOIN_TEAM_SUCCESS,
        payload: res.data,
        redirectTo: res.data === false ? undefined : "/endpoints",
      });
    })
    .catch((err) => {
      dispatch({
        type: JOIN_TEAM_FAIL,
        payload: false,
        redirectTo: undefined,
      });
    });
};

// create a new team for first time
export const createNewTeam = (data) => (dispatch, getState) => {
  const payload = {
    name: data.name,
    username: data.username,
  };
  axios
    .post(BASE_URL + "/team/new", payload, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type:
          res.data === false ? CREATE_NEW_TEAM_FAIL : CREATE_NEW_TEAM_SUCCESS,
        payload: res.data,
        // FIXME: review flow and finalize.
        redirectTo: res.data === false ? undefined : "/endpoints",
      });
    })
    .catch((err) => {
      dispatch({
        type: CREATE_NEW_TEAM_FAIL,
        payload: false,
        responseStatus: err.response.status,
        redirectTo: undefined,
      });
    });
};
