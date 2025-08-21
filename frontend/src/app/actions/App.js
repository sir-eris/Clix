import axios from "axios";
import { tokenConfig } from "../utils";

import {
  RETRIEVE_APPS_SUCCESS,
  RETRIEVE_APPS_FAIL,
  APP_CREATE_FAIL,
  APP_CREATE_SUCCESS,
  REMOVE_APP_FAIL,
  REMOVE_APP_SUCCESS,
} from "../types";

const BASE_URL = false
  ? "https://api.clix.dev/api/webapp"
  : "http://localhost:8000/api/webapp";

  
export const retrieveApps = () => (dispatch, getState) => {
  axios
    .get(BASE_URL + "/apps", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type:
          res.data === false
            ? RETRIEVE_APPS_FAIL
            : RETRIEVE_APPS_SUCCESS,
        payload: res.data,
        redirectTo: undefined,
      });
    })
    .catch((err) => {
      dispatch({
        type: RETRIEVE_APPS_FAIL,
        payload: err,
        redirectTo: undefined,
      });
    });
};

export const createApp = (data) => (dispatch, getState) => {
  const payload = {
    name: data["appName"],
    base_url: data["base_url"],
  };
  axios
    .post(
      BASE_URL + "/app",
      payload,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: res.data === false ? APP_CREATE_FAIL : APP_CREATE_SUCCESS,
        payload: res.data,
        redirectTo: res.data === false ? undefined : "/projects",
      });
    })
    .catch((err) => {
      dispatch({
        type: APP_CREATE_FAIL,
        payload: err,
        redirectTo: undefined,
      });
    });
};

export const removeApp = (id) => (dispatch, getState) => {
  axios
    .delete(
      BASE_URL + "/app/" + id,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: res.data === false ? REMOVE_APP_FAIL : REMOVE_APP_SUCCESS,
        payload: res.data,
        redirectTo: "/projects",
      });
    })
    .catch((err) => {
      dispatch({
        type: REMOVE_APP_FAIL,
        payload: err,
        redirectTo: undefined,
      });
    });
};
