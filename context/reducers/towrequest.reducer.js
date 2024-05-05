import {
  CREATE_TOWREQUEST_FAIL,
  CREATE_TOWREQUEST_REQUEST,
  CREATE_TOWREQUEST_SUCCESS,
  DELETE_TOWREQUEST_REQUEST,
  DELETE_TOWREQUEST_SUCCESS,
  GET_TOWREQUESTS_FAIL,
  GET_TOWREQUESTS_REQUEST,
  GET_TOWREQUESTS_SUCCESS,
  GET_TOWREQUEST_FAIL,
  GET_TOWREQUEST_REQUEST,
  GET_TOWREQUEST_SUCCESS,
  EDIT_TOWREQUEST_REQUEST,
  EDIT_TOWREQUEST_SUCCESS,
  EDIT_TOWREQUEST_FAIL,
} from "../../constants/actionTypes";

const towRequests = (state, { type, payload }) => {
  switch (type) {
    case EDIT_TOWREQUEST_REQUEST: {
      return {
        ...state,
        createTowRequest: {
          ...state.createTowRequest,
          loading: true,
          error: null,
        },
      };
    }

    case EDIT_TOWREQUEST_SUCCESS: {
      return {
        ...state,
        createTowRequest: {
          ...state.createTowRequest,
          loading: false,
          error: null,
        },

        towRequests: {
          ...state.towRequests,
          loading: false,
          data: state.towRequests.data.map((item) => {
            if (item.TowRequestId === payload.id) {
              return payload;
            } else {
              return item;
            }
          }),
          error: null,
        },
      };
    }

    case EDIT_TOWREQUEST_FAIL: {
      return {
        ...state,
        createTowRequest: {
          ...state.createTowRequest,
          loading: false,
          error: null,
        },
      };
    }

    case DELETE_TOWREQUEST_REQUEST: {
      return {
        ...state,
        deleteTowRequest: {
          ...state.deleteTowRequest,
          loading: true,
          error: null,
        },
      };
    }

    case DELETE_TOWREQUEST_SUCCESS: {
      return {
        ...state,
        deleteTowRequest: {
          ...state.deleteTowRequest,
          loading: false,
          error: null,
        },

        towRequests: {
          ...state.towRequests,
          loading: false,
          data: state.towRequests.data.filter(
            (item) => item.TowRequestId !== payload
          ),
          error: null,
        },
      };
    }

    case CREATE_TOWREQUEST_FAIL:
      return {
        ...state,
        createTowRequest: {
          ...state.createTowRequest,
          loading: false,
          error: null,
        },
      };
    case CREATE_TOWREQUEST_REQUEST:
      return {
        ...state,
        createTowRequest: {
          ...state.createTowRequest,
          loading: true,
          error: null,
        },
      };
    case CREATE_TOWREQUEST_SUCCESS:
      return {
        ...state,
        createTowRequest: {
          ...state.createTowRequest,
          loading: false,
          error: null,
          data: payload,
        },
      };

    case GET_TOWREQUESTS_REQUEST:
      return {
        ...state,
        towRequests: {
          ...state.towRequests,
          loading: true,
          error: null,
        },
      };

    case GET_TOWREQUESTS_SUCCESS:
      return {
        ...state,
        towRequests: {
          ...state.towRequests,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_TOWREQUESTS_FAIL:
      return {
        ...state,
        towRequests: {
          ...state.towRequests,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default towRequests;
