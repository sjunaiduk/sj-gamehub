import axios from "axios";
import { FetchResponse } from "../models/FetchResponse";
import { AxiosRequestConfig } from "axios";
export const client = axios.create({
  params: {
    key: "956b34c43ca644a2962307ff8cbb055e",
  },
  baseURL: "https://api.rawg.io/api",
});

class ApiClient<T> {
  endpoint: string;
  config?: AxiosRequestConfig;

  constructor(endpoint: string, config?: AxiosRequestConfig) {
    this.endpoint = endpoint;
    this.config = config;
  }

  getAll = () => {
    return client
      .get<FetchResponse<T>>(this.endpoint, {
        ...this.config,
      })
      .then((res) => {
        return res.data;
      });
  };
}

export default ApiClient;
