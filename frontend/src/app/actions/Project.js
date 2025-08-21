import axios from 'axios'
import { tokenConfig } from "../utils";

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

  RETRIEVE_MODELS_SUCCESS,
  RETRIEVE_ENDPOINTS_SUCCESS,
} from "../types";

const BASE_URL = false
  ? "https://api.clix.dev/api/webapp"
  : "http://localhost:8000/api/webapp";


export const retrieveProjects = () => async (dispatch, getState) => {
  await axios
    .get(BASE_URL + "/projects", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type:
          res.data === false
            ? RETRIEVE_PROJECTS_FAIL
            : RETRIEVE_PROJECTS_SUCCESS,
        payload: res.data,
        redirectTo: undefined,
      });
    })
    .catch((err) => {
      dispatch({
        type: RETRIEVE_PROJECTS_FAIL,
        payload: false,
        redirectTo: undefined,
      });
    });
}


export const retrieveProject = (id) => (dispatch, getState) => {
  axios.get(BASE_URL + '/project/' + id, tokenConfig(getState))
  .then(res => {
    dispatch({
      type:
        res.data === false ? RETRIEVE_PROJECT_FAIL : RETRIEVE_PROJECT_SUCCESS,
      payload: res.data,
      redirectTo: undefined,
    });
  })
  .catch(err => {
    dispatch({
      type: RETRIEVE_PROJECT_FAIL,
      payload: false,
      redirectTo: undefined,
    });
  })
}


export const activateProject = (id) => (dispatch, getState) => {
  axios.get(BASE_URL + '/project/activate/' + id, tokenConfig(getState))
  .then(res => {
    dispatch({
      type: res.data === false ? ACTIVATE_PROJECT_FAIL : ACTIVATE_PROJECT_SUCCESS,
      payload: res.data.projects,
      redirectTo: undefined
    })
    dispatch({
      type:
        res.data === false ? ACTIVATE_PROJECT_FAIL : RETRIEVE_ENDPOINTS_SUCCESS,
      payload: res.data.endpoints,
      redirectTo: undefined,
    });
    dispatch({
      type:
        res.data === false ? ACTIVATE_PROJECT_FAIL : RETRIEVE_MODELS_SUCCESS,
      payload: res.data.models,
      redirectTo: undefined,
    });
    dispatch({
      type:
        res.data === false ? ACTIVATE_PROJECT_FAIL : RETRIEVE_PROJECT_SETTINGS_SUCCESS,
      payload: res.data.settings,
      redirectTo: undefined,
    });
  })
  .catch(err => {
    dispatch({
      type: ACTIVATE_PROJECT_FAIL,
      payload: false,
      redirectTo: undefined
    })
  })
}


export const createProject = (data) => (dispatch, getState) => {
    const payload = {
      name: data["projectName"],
      framework: data["framework"],
      framework_version: data["version"],
      language: data["language"],
      app_name: 'API',
      app_base_url: 'api',
    };
    axios
      .post(BASE_URL + "/project", payload, tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: res.data === false ? PROJECT_CREATE_FAIL : PROJECT_CREATE_SUCCESS,
          payload: res.data,
          redirectTo: res.data === false ? undefined : '/projects',
        });
      })
      .catch((err) => {
        dispatch({ type: PROJECT_CREATE_FAIL, payload: false, redirectTo: undefined});
      });
}


export const updateProject = (data) => (dispatch, getState) => {
  const payload = {
    name: data.name,
  }
  console.log(data)
  axios
    .put(
      BASE_URL + "/project/" + data.id,
      payload,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: res.data === false ? UPDATE_PROJECT_FAIL : UPDATE_PROJECT_SUCCESS,
        payload: res.data,
        redirectTo: undefined,
      });
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_PROJECT_FAIL,
        payload: false,
        redirectTo: undefined,
      });
    });
}


export const removeProject = (id) => (dispatch, getState) => {
  axios.delete(BASE_URL + '/project/' + id, tokenConfig(getState))
  .then(res => {
    dispatch({
      type: res.data === false ? REMOVE_PROJECT_FAIL : REMOVE_PROJECT_SUCCESS,
      payload: res.data,
      redirectTo: undefined,
    })
  })
  .catch(err => {
    dispatch({
      type: REMOVE_PROJECT_FAIL,
      payload: false,
      redirectTo: undefined
    })
  })
}


export const retrieveProjectSettings = () => (dispatch, getState) => {
  axios
    .get(
      BASE_URL + "/project/settings/",
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type:
          res.data === false
            ? RETRIEVE_PROJECT_SETTINGS_FAIL
            : RETRIEVE_PROJECT_SETTINGS_SUCCESS,
        payload: res.data,
        redirectTo: undefined,
      });
    })
    .catch((err) => {
      dispatch({
        type: RETRIEVE_PROJECT_SETTINGS_FAIL,
        payload: false,
        redirectTo: undefined,
      });
    });
}


export const updateSettings = (data) => (dispatch, getState) => {
  const payload = {
    fields: data['fields']
  }
  axios.post(BASE_URL + "/project/settings/", payload, tokenConfig(getState))
  .then(res => {
    dispatch({
      type: res.data === false ? UPDATE_PROJECT_SETTINGS_FAIL : UPDATE_PROJECT_SETTINGS_SUCCESS,
      payload: res.data,
      redirectTo: undefined,
    })
  })
  .catch(err => {
    dispatch({
      type: UPDATE_PROJECT_SETTINGS_FAIL,
      payload: false,
      redirectTo: undefined,
    })
  })
}


export const retrieveTemplates = () => (dispatch, getState) => {
  axios
    .get(BASE_URL + "/templates", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type:
          res.data === false
            ? RETRIEVE_TEMPLATES_FAIL
            : RETRIEVE_TEMPLATES_SUCCESS,
        payload: res.data,
        redirectTo: undefined,
      });
    })
    .catch((err) => {
      dispatch({
        type: RETRIEVE_TEMPLATES_FAIL,
        payload: false,
        redirectTo: undefined,
      });
    });
}


export const removeTemplate = (id) => (dispatch, getState) => {
  axios
    .delete(BASE_URL + "/template/delete/" + id, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type:
          res.data === false ? REMOVE_TEMPLATE_FAIL : REMOVE_TEMPLATE_SUCCESS,
        payload: res.data,
        redirectTo: undefined,
      });
    })
    .catch((err) => {
      dispatch({
        type: REMOVE_TEMPLATE_FAIL,
        payload: false,
        redirectTo: undefined,
      });
    });
}

// can only be dene from a project
export const createTemplate = (id) => (dispatch, getState) => {
  axios
    .post(
      BASE_URL + "/template-from-project/" + id,
      {},
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type:
          res.data === false ? CREATE_TEMPLATE_FAIL : CREATE_TEMPLATE_SUCCESS,
        payload: res.data,
        redirectTo: undefined,
      });
    })
    .catch((err) => {
      dispatch({
        type: CREATE_TEMPLATE_FAIL,
        payload: false,
        redirectTo: undefined,
      });
    });
}


export const createProjectFromTemplate = (id) => (dispatch, getState) => {
  axios
<<<<<<< HEAD
<<<<<<< HEAD
    .post(BASE_URL + "/project-from-template/" + id, {}, tokenConfig(getState))
=======
    .post(BASE_URL + "/template/new-project/" + id, {}, tokenConfig(getState))
>>>>>>> logic
=======
    .post(BASE_URL + "/project-from-template/" + id, {}, tokenConfig(getState))
>>>>>>> modular-redesign
    .then((res) => {
      dispatch({
        type:
          res.data === false
            ? CREATE_PROJECT_FROM_TEMPLATE_FAIL
            : CREATE_PROJECT_FROM_TEMPLATE_SUCCESS,
        payload: res.data,
        redirectTo: undefined,
      });
    })
    .catch((err) => {
      dispatch({
        type: CREATE_PROJECT_FROM_TEMPLATE_FAIL,
        payload: false,
        redirectTo: undefined,
      });
    });
}


export const shareTemplate = (id) => (dispatch, getState) => {
  axios
    .get(
      BASE_URL + "/template/share/" + id,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type:
          res.data === false
            ? ADD_SHARE_TEMPLATE_FAIL
            : ADD_SHARE_TEMPLATE_SUCCESS,
        payload: res.data,
        redirectTo: "/projects",
      });
    })
    .catch((err) => {
      dispatch({
        type: ADD_SHARE_TEMPLATE_FAIL,
        payload: false,
        redirectTo: '/projects',
      });
    });
}

// this is very similar to updateProject
export const updateTemplate = (data) => (dispatch, getState) => {
  const payload = {
    name: data.name,
  };
  console.log(data);
  axios
    .put(
      BASE_URL + "/project/" + data.id,
      payload,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: res.data === false ? UPDATE_TEMPLATE_FAIL : UPDATE_TEMPLATE_SUCCESS,
        payload: res.data,
        redirectTo: undefined,
      });
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_TEMPLATE_FAIL,
        payload: false,
        redirectTo: undefined,
      });
    });
}