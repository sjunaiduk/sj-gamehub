import axios from "axios";
import { FetchResponse } from "../models/FetchResponse";

export const client = axios.create({
  params: {
    key: "956b34c43ca644a2962307ff8cbb055e",
  },
  baseURL: "https://api.rawg.io/api",
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return client.get<FetchResponse<T>>(this.endpoint).then((res) => {
      return res.data;
    });
  };
}

export default ApiClient;
