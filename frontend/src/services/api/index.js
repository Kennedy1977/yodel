import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import axios from "axios";

export const useApi = () => {
  const { getTransactions } = useContext(GlobalContext);
  const endpoint = "http://localhost:3000/api/";

  const getAllTransactions = (msg) => {
    axios
      .get(endpoint)
      .then((response) => {
        let status = document.querySelector(".status");
        status.classList = "status good";
        status.innerHTML = `Server status: ${response.status} ${response.statusText}`;
        getTransactions(response.data);
      })
      .catch((error) => {
        let status = document.querySelector(".status");
        status.classList = "status bad";
        status.innerHTML = `Server status: ${error.response.status} ${error.response.statusText} - ${error.response.data.message}`;
      });
  };

  const postTransaction = (data) => {
    axios
      .post(endpoint, data)
      .then((response) => {
        let status = document.querySelector(".status");
        status.classList = "status good";
        status.innerHTML = `Server status: ${response.status} ${response.statusText}`;
        getAllTransactions();
      })
      .catch((error) => {
        let status = document.querySelector(".status");
        status.classList = "status bad";
        status.innerHTML = `Server status: ${error.response.status} ${error.response.statusText} - ${error.response.data.message}`;
      });
  };

  const removeTransaction = (data) => {
    axios
      .delete(`${endpoint}/${data}`)
      .then((response) => {
        getAllTransactions();
      })
      .catch((error) => {
        let status = document.querySelector(".status");
        status.classList = "status bad";
        status.innerHTML = `Server status: ${error.response.status} ${error.response.statusText} - ${error.response.data.message}`;
      });
  };

  return { getAllTransactions, postTransaction, removeTransaction };
};
