import useGames from "../hooks/useGames";
import {
  Button,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

export const GameGrid = () => {
  const { games, error, isLoading, setLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <Button onClick={() => setLoading(!isLoading)}>Toggle Loading</Button>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        spacing={6}
        paddingInline="10px"
      >
        {isLoading && skeletons.map((s) => <GameCardSkeleton key={s} />)}

        {games.map((game) => (
          <>
            <GameCard key={game.id} game={game} />
          </>
        ))}
      </SimpleGrid>
    </>
  );
};
