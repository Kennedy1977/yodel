import axios from "axios";
import mockTransaction from "../../test/data/data.json";
import Api from "./Api";

describe("API", () => {
  jest.mock("axios");

  const api = new Api();

  test("should fetch users", async () => {
    const resp = { data: mockTransaction };

    axios.get = jest.fn(() => resp);

    const data = await api.get("local");
    expect(data).toEqual(resp.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("local");
  });
});
