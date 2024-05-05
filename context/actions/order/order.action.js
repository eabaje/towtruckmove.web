import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDERS_FAIL,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  EDIT_ORDER_FAIL,
  EDIT_ORDER_REQUEST,
  EDIT_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export const listOrders = () => async (dispatch) => {
  dispatch({
    type: GET_ORDERS_REQUEST,
  });
  try {
    const { res } = await axios.get(`/order/findAll/`);
    dispatch({ type: GET_ORDERS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_ORDERS_FAIL, payload: error.message });
  }
};

export const listOrderByCriteria = (url, params) => async (dispatch) => {
  dispatch({
    type: GET_ORDERS_REQUEST,
  });
  try {
    const { data } = await axios.get(`${url}${params}`);
    dispatch({ type: GET_ORDERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ORDERS_FAIL, payload: error.message });
  }
};

export const createOrder = (form) => async (dispatch) => {
  const requestPayload = {
    UserId: form.UserId || "",
    OrderId: form.OrderId || "",
    TotalPrice: form.TotalPrice || "",
    OrderSessionId: form.OrderSessionId || "",
    ReferenceId: form.ReferenceId || "",
    OrderStatus: form.OrderStatus || "",
    OrderMethod: form.OrderMethod || "",
  };

  dispatch({ type: CREATE_ORDER_REQUEST });

  try {
    const { res } = await axios.post(`/order/create/`, requestPayload);

    dispatch({
      type: CREATE_ORDER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.message && error.message ? error.message : error.message;
    dispatch({ type: CREATE_ORDER_FAIL, payload: message });
  }
};

export const editOrder = (form, orderId) => async (dispatch) => {
  const requestPayload = {
    OrderId: orderId || form.OrderId,
    UserId: form.UserId || "",
    TotalPrice: form.TotalPrice || "",
    OrderSessionId: form.OrderSessionId || "",
    ReferenceId: form.ReferenceId || "",
    OrderStatus: form.OrderStatus || "",
    OrderMethod: form.OrderMethod || "",
  };

  dispatch({ type: EDIT_ORDER_REQUEST });

  try {
    const { res } = await axios.put(`/order/update/`, requestPayload);

    dispatch({
      type: EDIT_ORDER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.message && error.message ? error.message : error.message;
    dispatch({ type: EDIT_ORDER_FAIL, payload: message });
  }
};

export const deleteOrder = (orderId) => async (dispatch) => {
  const requestPayload = {
    OrderId: orderId,
  };

  dispatch({ type: DELETE_ORDER_REQUEST });

  try {
    const { res } = await axios.delete(`/order/delete/${orderId}`);

    dispatch({
      type: DELETE_ORDER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.message && error.message ? error.message : error.message;
    dispatch({ type: DELETE_ORDER_FAIL, payload: message });
  }
};
