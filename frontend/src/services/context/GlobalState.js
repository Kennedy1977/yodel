import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  transactions: null,
  env: {
    loading: true,
  },
};

// Create Context
export const GlobalContext = createContext(initialState);

// Store Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions

  const getTransactions = (data) => {
    dispatch({
      type: "GET_TRANSACTIONS",
      payload: data,
    });
  };

  const isLoading = (data) => {
    dispatch({
      type: "IS_LOADING",
      payload: data,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        env: state.env,
        getTransactions,
        isLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
