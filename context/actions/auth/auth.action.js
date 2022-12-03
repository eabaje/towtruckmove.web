import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  CLEAR_AUTH_STATE,
} from "../../../constants/actionTypes";

import Axios from "axios";
import { API_URL } from "../../../constants";
import { CONNECTION_ERROR } from "../../../constants/api";
import axiosInstance from "../../../helpers/axiosInstance-2";

export const registerUser =
  (form) => (dispatch) => (onSuccess) => (onError) => {
    dispatch({ type: REGISTER_REQUEST, payload: form });

    axiosInstance()
      .post("auth/signup", form)
      .then((res) => {
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });

        // localStorage.setItem("token", res.data.token);
        // localStorage.setItem("user", JSON.stringify(res.data.user));

        onSuccess(res.data);
      })

      .catch((err) => {
        const message = err.response
          ? err.response.data.message
          : CONNECTION_ERROR;

        dispatch({
          type: REGISTER_FAIL,
          payload: message,
        });

        onError(message);
      });
  };

export const signin3 = (form) => {
  try {
    const res = Axios.post(`auth/signin`, form);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data));

    return res.data;
    //  console.log("res.data", res.data);
  } catch (error) {
    //  const message = error.response ? error.response.data.message : CONNECTION_ERROR;
    return error;
  }
};
export const signin = (form) => (onSuccess) => (onError) => {
  const requestPayload = {
    Email: form.Email,
    Password: form.Password,
  };

  axiosInstance()
    .post(`auth/signin`, form)
    .then((res) => {
      console.log(`res`, res);
      onSuccess(res.data);
    })
    .catch((err) => {
      const message = err.response
        ? err.response.data.message
        : CONNECTION_ERROR;

      onError(message);
    });
};
export const signin2 = (form) => (dispatch) => (onSuccess) => (onError) => {
  const requestPayload = {
    Email: form.Email,
    Password: form.Password,
  };

  dispatch({
    type: LOGIN_REQUEST,
  });
  axiosInstance()
    .post(`auth/signin`, requestPayload)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      console.log(`res`, res);
      onSuccess(res.data);
    })
    .catch((err) => {
      const message = err.response
        ? err.response.data.message
        : CONNECTION_ERROR;

      dispatch({
        type: LOGIN_FAIL,
        payload: message,
      });

      onError(message);
    });
};

export const signout = () => (dispatch) => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  dispatch({ type: CLEAR_AUTH_STATE });
  document.location.href = "/signin";
};
