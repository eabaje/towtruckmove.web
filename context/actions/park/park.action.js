import {
  CREATE_PARK_FAIL,
  CREATE_PARK_REQUEST,
  CREATE_PARK_SUCCESS,
  GET_PARKS_FAIL,
  GET_PARKS_REQUEST,
  GET_PARKS_SUCCESS,
  GET_PARK_FAIL,
  GET_PARK_REQUEST,
  GET_PARK_SUCCESS,
  EDIT_PARK_FAIL,
  EDIT_PARK_REQUEST,
  EDIT_PARK_SUCCESS,
  DELETE_PARK_FAIL,
  DELETE_PARK_REQUEST,
  DELETE_PARK_SUCCESS,
} from "../../../constants/actionTypes";
import { CONNECTION_ERROR } from "../../../constants/api";
import axios from "../../../helpers/axiosInstance";

export const listPARKS = () => (dispatch) => (onSuccess) => (onError) => {
  dispatch({
    type: GET_PARKS_REQUEST,
  });
  axios
    .get(`/PARK/findAll/`)
    .then((res) => {
      dispatch({ type: GET_PARKS_SUCCESS, payload: res.data });
      onSuccess(res.data);
    })

    .catch((err) => {
      const message = err.response ? err.response.data : CONNECTION_ERROR;
      dispatch({ type: GET_PARKS_FAIL, payload: message });

      onError(message);
    });
};



export const listPARKSByIdAsync = (PARKId) => async (dispatch) => {
  dispatch({
    type: GET_PARKS_REQUEST,
  });
  try {
    const { res } = await axios.get(`/PARK/findOne/${PARKId}`);
    dispatch({ type: GET_PARKS_SUCCESS, payload: res.data });
    return res.data.data;
  } catch (error) {
    dispatch({ type: GET_PARKS_FAIL, payload: error.message });
  }
};

export const listPARKSByLocationAsync = (PARKId) => async (dispatch) => {
  dispatch({
    type: GET_PARKS_REQUEST,
  });
  try {
    const { res } = await axios.get(`/PARK/findOne/${PARKId}`);
    dispatch({ type: GET_PARKS_SUCCESS, payload: res.data });
    return res.data.data;
  } catch (error) {
    dispatch({ type: GET_PARKS_FAIL, payload: error.message });
  }
};

export const listPARKSById = (PARKId) => (dispatch) => (onSuccess) => {
  dispatch({
    type: GET_PARKS_REQUEST,
  });

  axios
    .get(`/PARK/findOne/${PARKId}`)
    .then((res) => {
      //  console.log(`PARK_data`, res.data);
      dispatch({
        type: GET_PARKS_SUCCESS,
        payload: res.data,
      });

      onSuccess();
    })
    .catch((err) => {
      const message = err.response ? err.response.data : CONNECTION_ERROR;
      
      dispatch({
        type: GET_PARKS_FAIL,
        payload: err.message
          ? err.message
          : { error: "Something went wrong, try again" },
      });
    });
};

export const listParksByLocation = (givenLongitude,givenLatitude,maxDistance) => (dispatch) => (onSuccess) => {
  dispatch({
    type: GET_PARKS_REQUEST,
  });

  axios
    .get(`/Park/findAllParksByLocation/${givenLongitude}/${givenLatitude}/${maxDistance}`)
    .then((res) => {
      //  console.log(`PARK_data`, res.data);
      dispatch({
        type: GET_PARKS_SUCCESS,
        payload: res.data,
      });

      onSuccess();
    })
    .catch((err) => {
      const message = err.response ? err.response.data : CONNECTION_ERROR;
      
      dispatch({
        type: GET_PARKS_FAIL,
        payload: err.message
          ? err.message
          : { error: "Something went wrong, try again" },
      });
    });
};

export const listPARKSByCompany =
  (companyId) => (dispatch) => (onSuccess) => (onError) =>{
    dispatch({
      type: GET_PARKS_REQUEST,
    });

    axios
      .get(`/PARK/findAllPARKSByCompany/${companyId}`)
      .then((res) => {
        //  console.log(`PARK_data`, res.data);
        dispatch({
          type: GET_PARKS_SUCCESS,
          payload: res.data,
        });

        onSuccess();
      })
      .catch((err) => {
        const message = err.response ? err.response.data : CONNECTION_ERROR;
        dispatch({
          type: GET_PARKS_FAIL,
          payload: message,
        });
        onError(message);
      });
  };

export const listPARKSByVehicle = (vehicleId) => async (dispatch) => {
  dispatch({
    type: GET_PARKS_REQUEST,
  });
  try {
    const { res } = await axios.get(
      `/PARK/findAllPARKSByVehicle/${vehicleId}`
    );
    dispatch({ type: GET_PARKS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_PARKS_FAIL, payload: error.message });
   
  }
};

export const listPARKSLicensed = () => async (dispatch) => {
  dispatch({
    type: GET_PARKS_REQUEST,
  });
  try {
    const { res } = await axios.get(`/PARK/findAllPARKSLicensed/`);
    dispatch({ type: GET_PARKS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_PARKS_FAIL, payload: error.message });
  }
};

export const listPARKSByDate = (fromDate, endDate) => async (dispatch) => {
  dispatch({
    type: GET_PARKS_REQUEST,
  });
  try {
    const { res } = await axios.get(
      `/PARK/findAllPARKSByDate/${fromDate}/${endDate}/}`
    );
    dispatch({ type: GET_PARKS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_PARKS_FAIL, payload: error.message });
  }
};

export const listPARKByCriteria = (url, params) => async (dispatch) => {
  dispatch({
    type: GET_PARKS_REQUEST,
  });
  try {
    const { data } = await axios.get(`${url}${params}`);
    dispatch({ type: GET_PARKS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PARKS_FAIL, payload: error.message });
  }
};


export const searchPARKByLocation = (givenLatitude,givenLongitude,distanceRadius) => async (dispatch) => {
  dispatch({
    type: GET_PARKS_REQUEST,
  });
  try {
    const { res } = await axios().get(`/PARK/findPARKByLocation/${givenLatitude}/${givenLongitude}/${distanceRadius}}`);

    dispatch({ type: GET_PARKS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PARKS_FAIL, payload: error.message });
  }
};
export const createPARK1 = (form) => async (dispatch) => {
 

  dispatch({ type: CREATE_PARK_REQUEST });

  try {
    const { res } = await axios.post(`/PARK/create/`, form);

    dispatch({
      type: CREATE_PARK_SUCCESS,
      payload: res.data,
    });

    return res.data;
  } catch (error) {
    const message =
      error.message && error.message ? error.message : error.message;
    dispatch({ type: CREATE_PARK_FAIL, payload: message });
  }
};
export const createPARK =
  (form) => (dispatch) => (onSuccess) => (onError) => {
    // const requestPayload = {
    //   CompanyId: form.CompanyId ,
    //   PARKName: form.PARKName ,
    //   Email: form.Email || "",
    //   Phone: form.Phone || "",
    //   Address: form.Address || "",
    //   City: form.City || "",
    //   Country: form.Country || "",
    //   Licensed: form.Licensed || "",
    //   LicenseUrl: form.LicenseUrl || "",
    //   Rating: form.Rating ,
    //   PARKDocs: form.PARKDocs || "",
    //   PicUrl: form.PicUrl || null,
    // };

    dispatch({
      type: CREATE_PARK_REQUEST,
    });

    axios
      .post("/PARK/create", form)
      .then((res) => {
        dispatch({
          type: CREATE_PARK_SUCCESS,
          payload: res.data,
        });

        onSuccess(res.data);
      })
      .catch((err) => {
        const message = err.response ? err.response.data : CONNECTION_ERROR;
        dispatch({
          type: CREATE_PARK_FAIL,
          payload: message,
        });
        onError(message);
      });
  };

export const editPARK =
  (form, PARKId) => (dispatch) => (onSuccess) => (onError) => {
    const requestPayload = {
      CompanyId: form.CompanyId || "",
      PARKName: form.PARKName || "",
      Email: form.Email || "",
      Phone: form.Phone || "",
      Address: form.Address || "",
      City: form.City || "",
      Country: form.Country || "",
      Licensed: form.Licensed || "",
      LicenseUrl: form.LicenseUrl || "",
      Rating: form.Rating || "",
      PARKDocs: form.PARKDocs || "",
      PicUrl: form.PicUrl || null,
    };

    dispatch({ type: EDIT_PARK_REQUEST });

    axios
      .put(`/PARK/update/${PARKId}`, form)

      .then((res) => {
        dispatch({
          type: EDIT_PARK_SUCCESS,
          payload: res.data,
        });

        onSuccess(res.data);
      })
      .catch((err) => {
        const message = err.response ? err.response.data : CONNECTION_ERROR;
        dispatch({ type: EDIT_PARK_FAIL, payload: message });

        onError(message);
      });
  };

export const deletePARK = (PARKId) => async (dispatch) => {
  dispatch({ type: DELETE_PARK_REQUEST });

  try {
    const { res } = await axios.delete(`/PARK/delete/${PARKId}`);

    dispatch({
      type: DELETE_PARK_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const message =
      error.message && error.message ? error.message : error.message;
    dispatch({ type: DELETE_PARK_FAIL, payload: message });
  }
};
