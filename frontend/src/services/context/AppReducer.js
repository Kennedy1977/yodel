export default (state, action) => {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      return {
        ...state,
        transactions: {
          ...state.transactions,
          transactions: action.payload,
        },
        env: {
          ...state.env,
          loading: false,
        },
      };
    case "IS_LOADING":
      return {
        ...state,
        env: {
          ...state.env,
          loading: action.payload,
        },
      };
    default:
      return state;
  }
};
