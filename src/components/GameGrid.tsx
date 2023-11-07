import useGames from "../hooks/useGames";
import { SimpleGrid, Text, VStack } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";

export const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <VStack>
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
        {isLoading &&
          skeletons.map((s) => (
            <GameCardContainer>
              <GameCardSkeleton key={s} />
            </GameCardContainer>
          ))}

        {data.map((game) => (
          <>
            <GameCardContainer>
              <GameCard key={game.id} game={game} />
            </GameCardContainer>
          </>
        ))}
      </SimpleGrid>
    </VStack>
  );
};
