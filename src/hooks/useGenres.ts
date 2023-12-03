import { useQuery } from "@tanstack/react-query";
import genreClient from "../services/genreService";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: genreClient.getAll,
    staleTime: 10 * 1000,
  });

export default useGenres;
