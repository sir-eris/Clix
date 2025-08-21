import axios from 'axios'
import { tokenConfig } from '../utils'

import {
  ENDPOINT_CREATE_SUCCESS,
  ENDPOINT_CREATE_FAIL,
  RETRIEVE_ENDPOINTS_SUCCESS,
  RETRIEVE_ENDPOINTS_FAIL,
  RETRIEVE_ENDPOINT_SUCCESS,
  RETRIEVE_ENDPOINT_FAIL,
  REMOVE_ENDPOINT_SUCCESS,
  REMOVE_ENDPOINT_FAIL,
  UPDATE_ENDPOINT_SUCCESS,
  UPDATE_ENDPOINT_FAIL,
  RETRIEVE_ENDPOINTS_VALIDATIONS_FAIL,
  RETRIEVE_ENDPOINTS_VALIDATIONS_SUCCESS,
} from "../types";

const BASE_URL = false
  ? "https://api.clix.dev/api/webapp"
  : "http://localhost:8000/api/webapp";


export const retrieveEndpoints = () => (dispatch, getState) => {
  axios
    .get(BASE_URL + "/endpoints", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type:
          res.data === false
            ? RETRIEVE_ENDPOINTS_FAIL
            : RETRIEVE_ENDPOINTS_SUCCESS,
        payload: res.data,
        redirectTo: undefined,
      });
    })
    .catch((err) => {
      dispatch({
        type: RETRIEVE_ENDPOINTS_FAIL,
        payload: false,
        redirectTo: undefined,
      });
    });
}


export const getRequestValidations = () => (dispatch, getState) => {
  axios
    .get(BASE_URL + "/endpoints/validations/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type:
          res.data === false
            ? RETRIEVE_ENDPOINTS_VALIDATIONS_FAIL
            : RETRIEVE_ENDPOINTS_VALIDATIONS_SUCCESS,
        payload: res.data,
        redirectTo: undefined,
      });
    })
    .catch((err) => {
      dispatch({
        type: RETRIEVE_ENDPOINTS_VALIDATIONS_FAIL,
        payload: false,
        redirectTo: undefined,
      });
    });
};


export const retrieveEndpoint = (id) => (dispatch, getState) => {
  axios.get(BASE_URL + '/endpoint/' + id, tokenConfig(getState))
  .then(res => {
    dispatch({
      type: res.data === false ? RETRIEVE_ENDPOINT_FAIL : RETRIEVE_ENDPOINT_SUCCESS,
      payload: res.data,
      redirectTo: undefined,
    });
  })
  .catch(err => {
    dispatch({
      type: RETRIEVE_ENDPOINT_FAIL,
      payload: false,
      redirectTo: undefined,
    });
  })
}


export const createEndpoint = (data) => (dispatch, getState) => {
    const payload = {
      misc : {
        project_id: data["projectId"],
        current_app: data['currentApp'],
        current_file: data['currentFile'],
        is_draft: data['isDraft'],
        name: data['name'],
        description: data['description'],
      },
      form: {
        request: {
          method: data["requestMethod"],
          host: data["requestHost"],
          uri: data["requestURI"],
        },
        headers: {
          authorization: data["authHeaderType"],
          body: data["headers"],
        },
        params: data["params"],
        body: {
          type: data["payloadType"],
          payload: data["payload"],
        },
      },
      logic: {},
      response: {
        code: data["responseCode"],
        message: data["responseMessage"],
      },
    };
    axios
      .post(
        BASE_URL + "/endpoint",
        payload,
        tokenConfig(getState)
      )
      .then((res) => {
        dispatch({
          type:
            res.data === false ? ENDPOINT_CREATE_FAIL : ENDPOINT_CREATE_SUCCESS,
          payload: res.data,
          redirectTo: res.data === false ? undefined : "/endpoints",
        });
      })
      .catch((err) => {
        dispatch({
          type: ENDPOINT_CREATE_FAIL,
          payload: false,
          redirectTo: undefined,
        });
      });
}


export const updateEndpoint = (data) => (dispatch, getState) => {
  const payload = {
    misc: {
      // project_id: data["projectId"],
      // current_app: data["currentApp"],
      // current_file: data["currentFile"],
      is_draft: data["isDraft"],
      name: data["name"],
      description: data["description"],
    },
    form: {
      request: {
        method: data["requestMethod"],
        host: data["requestHost"],
        uri: data["requestURI"],
      },
      headers: {
        authorization: data["authHeaderType"],
        body: data["headers"],
      },
      params: data["params"],
      body: {
        type: data["payloadType"],
        payload: data["payload"],
      },
    },
    logic: {},
    response: {
      code: data["responseCode"],
      message: data["responseMessage"],
    },
  };
  axios.put(BASE_URL + '/endpoint/' + data['endpointId'], payload, tokenConfig(getState))
  .then(res => {
    dispatch({
      type: res.data === false ? UPDATE_ENDPOINT_FAIL : UPDATE_ENDPOINT_SUCCESS,
      payload: res.data,
      redirectTo: res.data === false ? undefined : '/endpoints',
    })
  })
  .catch(err => {
    dispatch({
      type: UPDATE_ENDPOINT_FAIL,
      payload: false,
      redirectTo: undefined
    })
  })
}


export const removeEndpoint = (id) => (dispatch, getState) => {
  axios.delete(BASE_URL + '/endpoint/' + id, tokenConfig(getState))
  .then(res => {
    dispatch({
      type: res.data === false ? REMOVE_ENDPOINT_FAIL : REMOVE_ENDPOINT_SUCCESS,
      payload: res.data,
      redirectTo: res.data === false ? undefined : '/endpoints',
    });
  })
  .catch(err => {
    dispatch({
      type: REMOVE_ENDPOINT_FAIL,
      payload: false,
      redirectTo: undefined,
    });
  })
}