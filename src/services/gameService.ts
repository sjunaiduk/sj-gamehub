import { Game } from "../models/Game";
import ApiClient from "./api-client";

const gameClient = new ApiClient<Game>("/games");

export default gameClient;
