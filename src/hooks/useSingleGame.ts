import { useQuery } from "@tanstack/react-query";
import singleGameClient from "../services/singleGameService";

const useSingleGame = (slugOrId: string) =>
  useQuery({
    queryKey: ["game", slugOrId],
    queryFn: () => singleGameClient.getSingle(slugOrId),
  });

export default useSingleGame;
