import { Game } from "../models/Game";
import GameQuery from "../models/GameQuery";
import useData from "./useData";

const useGames = (gameQuery: GameQuery) => useData<Game>("/games",
[gameQuery],
{
    params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
    },
});

export default useGames;
