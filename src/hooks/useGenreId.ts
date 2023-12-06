import useGenres from "./useGenres";

const useGenreId = (id: number) => {
  const { data } = useGenres();

  return data?.results.find((g) => g.id === id);
};

export default useGenreId;
