import {
  CREATE_ASSIGN_DRIVER_FAIL,
  CREATE_ASSIGN_DRIVER_REQUEST,
  CREATE_ASSIGN_DRIVER_SUCCESS,
  DELETE_ASSIGN_DRIVER_FAIL,
  DELETE_ASSIGN_DRIVER_REQUEST,
  DELETE_ASSIGN_DRIVER_SUCCESS,
  EDIT_ASSIGN_DRIVER_FAIL,
  EDIT_ASSIGN_DRIVER_REQUEST,
  EDIT_ASSIGN_DRIVER_SUCCESS,
  GET_ASSIGN_DRIVERS_FAIL,
  GET_ASSIGN_DRIVERS_REQUEST,
  GET_ASSIGN_DRIVERS_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInstance";

export const listAssignedDrivers = () => async (dispatch) => {
  dispatch({
    type: GET_ASSIGN_DRIVERS_REQUEST,
  });
  try {
    const { res } = await axios.get(`/driver/findAllAssignedDrivers/`);
    dispatch({ type: GET_ASSIGN_DRIVERS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_ASSIGN_DRIVERS_FAIL, payload: error.message });
  }
};

export const listAssignedDriverByCriteria =
  (url, params) => async (dispatch) => {
    dispatch({
      type: GET_ASSIGN_DRIVERS_REQUEST,
    });
    try {
      const { data } = await axios.get(`${url}${params}`);
      dispatch({ type: GET_ASSIGN_DRIVERS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_ASSIGN_DRIVERS_FAIL, payload: error.message });
    }
  };

export const createAssignedDriver = (form) => async (dispatch) => {
  const requestPayload = {
    VehicleId: form.VehicleId || "",
    DriverId: form.DriverId || "",
    AssignedDate: form.AssignedDate || null,
    Assigned: form.Assigned || false,
  };

  dispatch({ type: CREATE_ASSIGN_DRIVER_REQUEST });

  try {
    const { res } = await axios.post(
      `/driver/AssignDriverToVehicle`,
      requestPayload
    );

    dispatch({
      type: CREATE_ASSIGN_DRIVER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.message && error.message ? error.message : error.message;
    dispatch({ type: CREATE_ASSIGN_DRIVER_FAIL, payload: message });
  }
};

export const editAssignedDriver =
  (form, assignedDriverId) => async (dispatch) => {
    const requestPayload = {
      AssignedDriverId: assignedDriverId || form.AssignedDriverId,
      VehicleId: form.VehicleId || "",
      DriverId: form.DriverId || "",
      AssignedDate: form.AssignedDate || null,
      Assigned: form.Assigned || false,
    };

    dispatch({ type: EDIT_ASSIGN_DRIVER_REQUEST });

    try {
      const { res } = await axios.put(`/payment/update/`, requestPayload);

      dispatch({
        type: EDIT_ASSIGN_DRIVER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      const message =
        error.message && error.message ? error.message : error.message;
      dispatch({ type: EDIT_ASSIGN_DRIVER_FAIL, payload: message });
    }
  };
