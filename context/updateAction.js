export default function updateAction(state, payload) {
  console.log("state:", state);
  console.log("payload:", payload);
  return {
    ...state,
    towRequest: {
      ...state.towRequest,
      ...payload,
    },
    driver: {
      ...state.driver,
      ...payload,
    },
  };
}
