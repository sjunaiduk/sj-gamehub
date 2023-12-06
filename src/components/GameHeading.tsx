import { Heading } from "@chakra-ui/react";
import GameQuery from "../models/GameQuery";
import usePlatformId from "../hooks/usePlatformId";
import useGenreId from "../hooks/useGenreId";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const curPlatform = usePlatformId(gameQuery.platformId);

  const curGenre = useGenreId(gameQuery.genreId);

  const heading = `${curGenre?.name || ""} ${curPlatform?.name || ""} Games`;
  return (
    <Heading paddingBottom={2} as="h1" fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
