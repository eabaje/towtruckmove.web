import React, { createContext, useReducer } from "react";
import InitialState from "./initialStates/index.state";
import reducer from "./reducers/index.reducer";

export const GlobalContext = createContext({});

const {
  authReducer,
  assignReducer,
  carrierReducer,
  driverReducer,
  orderReducer,
  paymentReducer,
  profileReducer,
  shipmentReducer,
  parkReducer,
  towRequestReducer,
  subscribeReducer,
  tripReducer,
  vehicleReducer,
  userReducer,
} = reducer;

const {
  authInitial,
  assignInitial,
  carrierInitial,
  driverInitial,
  orderInitial,
  paymentInitial,
  profileInitial,
  shipmentInitial,
  parkInitial,
  towRequestInitial,
  subscribeInitial,
  tripInitial,
  vehicleInitial,
  userInitial,
} = InitialState;

const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitial);
  const [assignState, assignDispatch] = useReducer(
    assignReducer,
    assignInitial
  );
  const [carrierState, carrierDispatch] = useReducer(
    carrierReducer,
    carrierInitial
  );
  const [driverState, driverDispatch] = useReducer(
    driverReducer,
    driverInitial
  );
  const [orderState, orderDispatch] = useReducer(orderReducer, orderInitial);
  const [paymentState, paymentDispatch] = useReducer(
    paymentReducer,
    paymentInitial
  );
  const [profileState, profileDispatch] = useReducer(
    profileReducer,
    profileInitial
  );
  const [shipmentState, shipmentDispatch] = useReducer(
    shipmentReducer,
    shipmentInitial
  );
  const [parkState, parkDispatch] = useReducer(
    parkReducer,
    parkInitial
  );
  const [towRequestState, towRequestDispatch] = useReducer(
    towRequestReducer,
    towRequestInitial
  );
  const [subscribeState, subscribeDispatch] = useReducer(
    subscribeReducer,
    subscribeInitial
  );
  const [tripState, tripDispatch] = useReducer(tripReducer, tripInitial);
  const [vehicleState, vehicleDispatch] = useReducer(
    vehicleReducer,
    vehicleInitial
  );
  const [userState, userDispatch] = useReducer(userReducer, userInitial);

  return (
    <GlobalContext.Provider
      value={{
        authState,
        assignState,
        carrierState,
        driverState, 
        parkState,
        towRequestState,
        orderState,
        paymentState,
        profileState,
        shipmentState,
        subscribeState,
        tripState,
        vehicleState,
        userState,
        authDispatch,
        assignDispatch,
        carrierDispatch,
        driverDispatch,
        parkDispatch,
        towRequestDispatch,
        orderDispatch,
        paymentDispatch,
        profileDispatch,
        shipmentDispatch,
        subscribeDispatch,
        tripDispatch,
        vehicleDispatch,
        userDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
