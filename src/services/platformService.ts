import { Platform } from "../models/Platform";
import ApiClient from "./api-client";

const platformService = new ApiClient<Platform>("/platforms/lists/parents");

export default platformService;
