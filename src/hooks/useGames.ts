import { useInfiniteQuery } from "@tanstack/react-query";
import gameClient from "../services/gameService";
import useGameQueryStore from "../store";

const useGames = () =>
{
  const gameQuery = useGameQueryStore(select => select.gameQuery);
 const query =  useInfiniteQuery({
  queryKey: ["games", gameQuery],
  queryFn: ({ pageParam = 1 }) =>
    gameClient.getAll({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
      },
    }),
  getNextPageParam: (lastPage, allPages) => {
    return lastPage.next ? allPages.length + 1 : undefined;
  },
  initialPageParam: 1,
});

return query;
}
 

export default useGames;
