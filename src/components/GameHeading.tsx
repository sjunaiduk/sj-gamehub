import { Heading } from "@chakra-ui/react";
import GameQuery from "../models/GameQuery";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const curGenre = genres?.results.find(
    (genre) => genre.id == gameQuery.genreId
  );
  const curPlatform = platforms?.results.find(
    (platform) => platform.id == gameQuery.platformId
  );
  const heading = `${curGenre?.name || ""} ${curPlatform?.name || ""} Games`;
  return (
    <Heading paddingBottom={2} as="h1" fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
