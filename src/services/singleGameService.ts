import { Game } from "../models/Game";
import ApiClient from "./api-client";

const singleGameClient = new ApiClient<Game>("/games");

export default singleGameClient;
