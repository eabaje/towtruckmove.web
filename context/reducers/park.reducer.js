import {
  CREATE_PARK_FAIL,
  CREATE_PARK_REQUEST,
  CREATE_PARK_SUCCESS,
  DELETE_PARK_REQUEST,
  DELETE_PARK_SUCCESS,
  GET_PARKS_FAIL,
  GET_PARKS_REQUEST,
  GET_PARKS_SUCCESS,
  GET_PARK_FAIL,
  GET_PARK_REQUEST,
  GET_PARK_SUCCESS,
  EDIT_PARK_REQUEST,
  EDIT_PARK_SUCCESS,
  EDIT_PARK_FAIL,
} from "../../constants/actionTypes";

const Parks = (state, { type, payload }) => {
  switch (type) {
    case EDIT_PARK_REQUEST: {
      return {
        ...state,
        createPark: {
          ...state.createPark,
          loading: true,
          error: null,
        },
      };
    }

    case EDIT_PARK_SUCCESS: {
      return {
        ...state,
        createPark: {
          ...state.createPark,
          loading: false,
          error: null,
        },

        Parks: {
          ...state.Parks,
          loading: false,
          data: state.Parks.data.map((item) => {
            if (item.PARKId === payload.id) {
              return payload;
            } else {
              return item;
            }
          }),
          error: null,
        },
      };
    }

    case EDIT_PARK_FAIL: {
      return {
        ...state,
        createPark: {
          ...state.createPark,
          loading: false,
          error: null,
        },
      };
    }

    case DELETE_PARK_REQUEST: {
      return {
        ...state,
        deletePark: {
          ...state.deletePark,
          loading: true,
          error: null,
        },
      };
    }

    case DELETE_PARK_SUCCESS: {
      return {
        ...state,
        deletePark: {
          ...state.deletePark,
          loading: false,
          error: null,
        },

        Parks: {
          ...state.Parks,
          loading: false,
          data: state.Parks.data.filter(
            (item) => item.PARKId !== payload
          ),
          error: null,
        },
      };
    }

    case CREATE_PARK_FAIL:
      return {
        ...state,
        createPark: {
          ...state.createPark,
          loading: false,
          error: null,
        },
      };
    case CREATE_PARK_REQUEST:
      return {
        ...state,
        createPark: {
          ...state.createPark,
          loading: true,
          error: null,
        },
      };
    case CREATE_PARK_SUCCESS:
      return {
        ...state,
        createPark: {
          ...state.createPark,
          loading: false,
          error: null,
          data: payload,
        },
      };

    case GET_PARKS_REQUEST:
      return {
        ...state,
        Parks: {
          ...state.Parks,
          loading: true,
          error: null,
        },
      };

    case GET_PARKS_SUCCESS:
      return {
        ...state,
        Parks: {
          ...state.Parks,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_PARKS_FAIL:
      return {
        ...state,
        Parks: {
          ...state.Parks,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default Parks;
