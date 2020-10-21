// Correct way to make API calls

import axios from "axios";

export default class Api {
  get = async (endpoint) => {
    try {
      const response = await axios.get(endpoint);
      const { data } = response;
      return data;
    } catch (error) {}
  };
}
