import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import axios from "axios";

export const useApi = () => {
  const { getTransactions } = useContext(GlobalContext);
  const endpoint = "http://localhost:3000/api/";

  const getAllTransactions = () => {
    axios
      .get(endpoint)
      .then((response) => {
        getTransactions(response.data);
      })
      .catch((error) => {
        throw error;
      });
  };

  const postTransaction = (data) => {
    axios
      .post(endpoint, data)
      .then((response) => {
        console.log(response);
        getAllTransactions();
      })
      .catch((error) => {
        throw error;
      });
  };

  const removeTransaction = (data) => {
    axios
      .delete(`${endpoint}/${data}`)
      .then((response) => {
        console.log(response);
        getAllTransactions();
      })
      .catch((error) => {
        throw error;
      });
  };

  return { getAllTransactions, postTransaction, removeTransaction };
};
