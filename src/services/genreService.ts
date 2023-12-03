import { Genre } from "../models/Genre";
import ApiClient from "./api-client";

const genreClient = new ApiClient<Genre>("/genres");
export default genreClient;
