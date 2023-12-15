import { FetchResponse } from "../models/FetchResponse";
import { Game } from "../models/Game";
import ApiClient from "./api-client";

const gameClient = new ApiClient<FetchResponse<Game>>("/games");

export default gameClient;
