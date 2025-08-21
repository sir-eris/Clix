import axios from "axios";
import {
  AUTH_LOADING,
  AUTH_LOADED,
  AUTH_ERROR,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAIL,
  AUTH_LOGOUT_SUCCESS,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAIL,
  PASSWORD_FORGOT_0_FAIL,
  PASSWORD_FORGOT_0_SUCCESS,
  PASSWORD_FORGOT_1_FAIL,
  PASSWORD_FORGOT_1_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PASSWORD_SUCCESS,
  CONTACT_FAIL,
  CONTACT_SUCCESS,
  CHECK_VISITED_PAGE_FAIL,
  CHECK_VISITED_PAGE_SUCCESS,
  JOIN_NEWSLETTER_FAIL,
  JOIN_NEWSLETTER_SUCCESS,
  UNSUBSCRIBE_NEWSLETTER_FAIL,
  UNSUBSCRIBE_NEWSLETTER_SUCCESS,
  RETRIEVE_FAQS_FAIL,
  RETRIEVE_FAQS_SUCCESS,
  ASK_FAQ_FAIL,
  ASK_FAQ_SUCCESS,
} from "../types";
import { tokenConfig } from "../utils";

const BASE_URL = false
  ? "https://api.clix.dev/api/webapp/auth"
  : "http://localhost:8000/api/webapp/auth";

<<<<<<< HEAD
  const CONTACT_BASE_URL = false
    ? "https://api.clix.dev/api/webapp"
    : "http://localhost:8000/api/webapp";

=======
const PUBLIC_BASE_URL = true
  ? "https://api.clix.dev/api/webapp"
  : "http://localhost:8000/api/webapp";
>>>>>>> modular-redesign

// CHECK TOKEN AND LOAD AUTH STATE
export const loadAuth = () => (dispatch, getState) => {
  dispatch({ type: AUTH_LOADING });

  axios
    .get(BASE_URL + "/login", tokenConfig(getState))
    .then((res) => {
      dispatch({
        payload: res.data,
        type: res.data === false ? AUTH_ERROR : AUTH_LOADED,
        redirectTo: res.data === false ? "/" : undefined,
      });
    })
    .catch((err) => {
      dispatch({ type: AUTH_ERROR, redirectTo: undefined });
    });
};

// LOGIN
export const login = (email, password) => (dispatch) => {
  dispatch({ type: AUTH_LOADING });

  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  axios
    .post(BASE_URL + "/login", { email, password }, config)
    .then((res) => {
      dispatch({
        type: res.data === false ? AUTH_LOGIN_FAIL : AUTH_LOGIN_SUCCESS,
        payload: res.data,
        redirectTo: res.data === false ? undefined : "/endpoints",
      });
    })
    .catch((err) => {
      dispatch({
        type: AUTH_LOGIN_FAIL,
        payload: false,
        redirectTo: undefined,
      });
    });
};

// LOGOUT
export const logout = () => (dispatch, getState) => {
  axios
    .get(BASE_URL + "/logout", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: AUTH_LOGOUT_SUCCESS,
        redirectTo: "/login",
      });
    })
    .catch((err) => {
      dispatch({
        type: AUTH_LOGOUT_SUCCESS,
        redirectTo: "/",
      });
    });
};

// REGISTER
export const register = (data) => (dispatch) => {
  dispatch({ type: AUTH_LOADING });

  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  const payload = {
    // TODO
    // plan: data["plan"],
    password: data["password"],
    email: data["email"],
    first_name: data["fname"],
    last_name: data["lname"],
    experience_level: data["level_key"],
  };

  axios
    .post(BASE_URL + "/register", payload, config)
    .then((res) => {
      console.log(res)
      dispatch({
        type: res.data === false ? AUTH_REGISTER_FAIL : AUTH_REGISTER_SUCCESS,
        payload: res.data,
        statusCode: res.status,
        redirectTo: res.data === false ? undefined : "/logic",
      });
    })
    .catch((err) => {
      console.log(err)
      dispatch({
        type: AUTH_REGISTER_FAIL,
        payload: false,
        statusCode: err.response.status,
        redirectTo: undefined,
      });
    });
};

// FORGOT PASSWORD
export const verifyEmail = (data) => (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const payload = {
    email: data["email"],
  };
  axios
    .post(BASE_URL + "/reset-password", payload, config)
    .then((res) => {
      dispatch({
        type:
          res.data === false
            ? PASSWORD_FORGOT_0_FAIL
            : PASSWORD_FORGOT_0_SUCCESS,
        payload: res.data,
        redirectTo: undefined,
      });
    })
    .catch((err) => {
      dispatch({
        type: PASSWORD_FORGOT_0_FAIL,
        payload: false,
        redirectTo: undefined,
      });
    });
};

// Reset Password
export const resetPassword = (data) => (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const payload = {
    email: data["email"],
    temp_code: data["tempCode"],
    password: data["newPassword"],
  };
  axios
    .put(BASE_URL + "/reset-password", payload, config)
    .then((res) => {
      dispatch({
        type:
          res.data === false
            ? PASSWORD_FORGOT_1_FAIL
            : PASSWORD_FORGOT_1_SUCCESS,
        payload: res.data,
        redirectTo: res.data === false ? undefined : "/login",
      });
    })
    .catch((err) => {
      dispatch({
        type: PASSWORD_FORGOT_1_FAIL,
        payload: false,
        redirectTo: undefined,
      });
    });
};

// Update Password
export const updatePassword = (data) => (dispatch, getState) => {
  const payload = {
    old_password: data["oldPassword"],
    new_password: data["newPassword"],
  };

  axios
    .put(BASE_URL + "/update-password", payload, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type:
          res.data === false ? UPDATE_PASSWORD_FAIL : UPDATE_PASSWORD_SUCCESS,
        payload: res.data,
        redirectTo: undefined,
      });
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_PASSWORD_FAIL,
        payload: false,
        redirectTo: undefined,
      });
    });
};

// check visited page
export const checkPagesVisited = (page) => (dispatch, getState) => {
  axios
    .get(BASE_URL + "/visited/" + page, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type:
          res.data === false
            ? CHECK_VISITED_PAGE_FAIL
            : CHECK_VISITED_PAGE_SUCCESS,
        payload: res.data,
        redirectTo: undefined,
      });
    })
    .catch((err) => {
      dispatch({
        type: CHECK_VISITED_PAGE_FAIL,
        payload: false,
        redirectTo: undefined,
      });
    });
};

// Contact Us
export const contact = (data) => (dispatch) => {
  const payload = {
    email: data["email"],
    topic: data["topic"],
    message: data["message"],
  };
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  axios
<<<<<<< HEAD
    .post(CONTACT_BASE_URL + "/contact", payload, config)
=======
    .post(PUBLIC_BASE_URL + "/contact", payload, config)
>>>>>>> modular-redesign
    .then((res) => {
      dispatch({
        type: res.data === false ? CONTACT_FAIL : CONTACT_SUCCESS,
        payload: res.data,
        redirectTo: undefined,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: CONTACT_FAIL,
        payload: false,
        redirectTo: undefined,
      });
    });
};

// JOIN NEWSLETTER
export const joinNewsletter = (data) => (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const payload = {
    email: data.email,
    topics: data.topics,
  };

  axios
    .post(PUBLIC_BASE_URL + "/newsletter", payload, config)
    .then((res) => {
      dispatch({
        type:
          res.data === false ? JOIN_NEWSLETTER_FAIL : JOIN_NEWSLETTER_SUCCESS,
        payload: res.data,
        redirectTo: undefined,
      });
    })
    .catch((err) => {
      dispatch({
        type: JOIN_NEWSLETTER_FAIL,
        payload: false,
        redirectTo: undefined,
      });
    });
};

// UNSUBSCRIBE NEWSLETTER
export const unsubscribeNewsletter = (email) => (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  axios
    .delete(PUBLIC_BASE_URL + "/newsletter/unsubscribe", { email: email }, config)
    .then((res) => {
      dispatch({
        type:
          res.data === false
            ? UNSUBSCRIBE_NEWSLETTER_FAIL
            : UNSUBSCRIBE_NEWSLETTER_SUCCESS,
        payload: res.data,
        redirectTo: undefined,
      });
    })
    .catch((err) => {
      dispatch({
        type: UNSUBSCRIBE_NEWSLETTER_FAIL,
        payload: false,
        redirectTo: undefined,
      });
    });
};

// GET FAQ
export const retrieveFAQs = () => (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  axios
    .get(PUBLIC_BASE_URL + "/faqs", config)
    .then((res) => {
      dispatch({
        type: res.data === false ? RETRIEVE_FAQS_FAIL : RETRIEVE_FAQS_SUCCESS,
        payload: res.data,
        redirectTo: undefined,
      });
    })
    .catch((err) => {
      dispatch({
        type: RETRIEVE_FAQS_FAIL,
        payload: false,
        redirectTo: undefined,
      });
    });
};

// NEW FAQ
export const askFAQ = (question) => (dispatch, getState) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  axios
    .post(PUBLIC_BASE_URL + "/faqs/ask", { question: question }, config)
    .then((res) => {
      dispatch({
        type:
          res.data === false
            ? ASK_FAQ_FAIL
            : ASK_FAQ_SUCCESS,
        payload: res.data,
        redirectTo: undefined,
      });
    })
    .catch((err) => {
      dispatch({
        type: ASK_FAQ_FAIL,
        payload: false,
        redirectTo: undefined,
      });
    });
};
