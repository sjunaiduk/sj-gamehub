import { Game } from "../models/Game";
import { Genre } from "../models/Genre";
import useData from "./useData";

const useGames = (selectedGenre : Genre | null) => useData<Game>("/games",
[selectedGenre],
{
    params: {
        genres: selectedGenre?.id,
    },
});

export default useGames;
