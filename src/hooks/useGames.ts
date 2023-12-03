import { useQuery } from "@tanstack/react-query";
import GameQuery from "../models/GameQuery";
import gameClient from "../services/gameService";
import { FetchResponse } from "../models/FetchResponse";
import { Game } from "../models/Game";

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: gameClient(gameQuery).getAll,
    staleTime: 60 * 1000, //1m
  });

export default useGames;
