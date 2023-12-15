import axios from "axios";
import { AxiosRequestConfig } from "axios";
export const client = axios.create({
  params: {
    key: "956b34c43ca644a2962307ff8cbb055e",
  },
  baseURL: "https://api.rawg.io/api",
});

class ApiClient<TResponse> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return client
      .get<TResponse>(this.endpoint, {
        ...config,
      })
      .then((res) => {
        return res.data;
      });
  };

  getSingle = (slugOrId: string) => {
    return client
      .get<TResponse>(`${this.endpoint}/${slugOrId}`)
      .then((res) => res.data);
  };
}

export default ApiClient;
