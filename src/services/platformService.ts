import { FetchResponse } from "../models/FetchResponse";
import { Platform } from "../models/Platform";
import ApiClient from "./api-client";

const platformService = new ApiClient<FetchResponse<Platform>>(
  "/platforms/lists/parents"
);

export default platformService;
