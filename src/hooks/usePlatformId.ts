import usePlatforms from "./usePlatforms";

const usePlatformId = (id: number) => {
  const { data } = usePlatforms();
  return data?.results.find((p) => p.id === id);
};

export default usePlatformId;
