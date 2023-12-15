import { FetchResponse } from "../models/FetchResponse";
import { Genre } from "../models/Genre";
import ApiClient from "./api-client";

const genreClient = new ApiClient<FetchResponse<Genre>>("/genres");
export default genreClient;
