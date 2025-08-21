import axios from 'axios'
import { tokenConfig } from "../utils"

import {
  MODEL_CREATE_SUCCESS,
  MODEL_CREATE_FAIL,
  RETRIEVE_MODELS_SUCCESS,
  RETRIEVE_MODELS_FAIL,
  REMOVE_MODEL_SUCCESS,
  REMOVE_MODEL_FAIL,
  REMOVE_MODEL_FIELD_FAIL,
  REMOVE_MODEL_FIELD_SUCCESS,
  RETRIEVE_MODEL_SUCCESS,
  RETRIEVE_MODEL_FAIL,
  UPDATE_MODEL_FAIL,
  UPDATE_MODEL_SUCCESS,
  RETRIEVE_FOREIGN_KEYS_FAIL,
  RETRIEVE_FOREIGN_KEYS_SUCCESS,
} from "../types";

const BASE_URL = false
  ? "https://api.clix.dev/api/webapp"
  : "http://localhost:8000/api/webapp";

export const retrieveModels = () => (dispatch, getState) => {
  axios
    .get(BASE_URL + "/models", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type:
          res.data === false ? RETRIEVE_MODELS_FAIL : RETRIEVE_MODELS_SUCCESS,
        payload: res.data,
        redirectTo: undefined,
      });
    })
    .catch((err) => {
      dispatch({ type: RETRIEVE_MODELS_FAIL, payload: false, redirectTo: undefined });
    });
}

export const retrieveModel = (id) => (dispatch, getState) => {
  axios.get(BASE_URL + '/model/' + id, tokenConfig(getState))
  .then(res => {
    dispatch({
      type: res.data === false ? RETRIEVE_MODEL_FAIL : RETRIEVE_MODEL_SUCCESS,
      payload: res.data,
      redirectTo: undefined,
    });
  })
  .catch(err => {
    dispatch({
      type: RETRIEVE_MODEL_FAIL,
      payload: false,
      redirectTo: undefined
    })
  })
};

export const getForeignKeys = () => (dispatch, getState) => {
  axios
    .get(
      BASE_URL + "/models-foreign-keys",
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: res.data === false ? RETRIEVE_FOREIGN_KEYS_FAIL : RETRIEVE_FOREIGN_KEYS_SUCCESS,
        payload: res.data,
        redirectTo: undefined,
      });
    })
    .catch((err) => {
      dispatch({
        type: RETRIEVE_FOREIGN_KEYS_FAIL,
        payload: false,
        redirectTo: undefined,
      });
    });
}


export const createModel = (data) => (dispatch, getState) => {
  const payload = {
    table_name: data["tableName"],
    fields: data["fields"],
    is_draft: data['isDraft'],
  };
  axios
    .post(BASE_URL + "/model", payload, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: res.data === false ? MODEL_CREATE_FAIL : MODEL_CREATE_SUCCESS,
        payload: res.data,
        redirectTo: res.data === false ? undefined : "/models",
      });
    })
    .catch((err) => {
      dispatch({
        type: MODEL_CREATE_FAIL,
        payload: false,
        redirectTo: undefined,
      });
    });
}


export const updateModel = (data) => (dispatch, getState) => {
  const payload = data;
  axios
    .put(
      BASE_URL + "/model/" + data["modelId"],
      payload,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: res.data === false ? UPDATE_MODEL_FAIL : UPDATE_MODEL_SUCCESS,
        payload: res.data,
        redirectTo:  res.data === false ? undefined : '/models',
      });
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_MODEL_FAIL,
        payload: false,
        redirectTo: undefined,
      });
    });
};


export const removeModel = (id) => (dispatch, getState) => {
  axios.delete(BASE_URL + '/model/' + id, tokenConfig(getState))
  .then(res => {
    dispatch({
      type: res.data === false ? REMOVE_MODEL_FAIL : REMOVE_MODEL_SUCCESS,
      payload: res.data,
      redirectTo: res.data === false ? undefined : '/models',
    });
  })
  .catch(err => {
    dispatch({
      type: REMOVE_MODEL_FAIL,
      payload: false,
      redirectTo: undefined,
    });
  })
};

export const removeModelField = (data) => (dispatch, getState) => {
  axios
    .delete(
      BASE_URL + "/model/" +
        data.modelId +
        "/" +
        data.fieldId,
      tokenConfig(getState)
    )
    .then((res) => {
      console.log(res);
      dispatch({
        type: res.data === false ? REMOVE_MODEL_FIELD_FAIL : REMOVE_MODEL_FIELD_SUCCESS,
        payload: res.data,
        redirectTo: undefined,
      });
    })
    .catch((err) => {
      console.log(err)
      dispatch({
        type: REMOVE_MODEL_FIELD_FAIL,
        payload: false,
        redirectTo: undefined,
      });
    });
}