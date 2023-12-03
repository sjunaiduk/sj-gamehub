import { Game } from "../models/Game";
import GameQuery from "../models/GameQuery";
import ApiClient from "./api-client";

const gameClient = (query: GameQuery) =>
  new ApiClient<Game>("/games", {
    params: {
      genres: query.genre?.id,
      parent_platforms: query.platform?.id,
      ordering: query.sortOrder,
      search: query.searchText,
    },
  });

export default gameClient;
