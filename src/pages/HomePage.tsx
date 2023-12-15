import { GridItem, Show, HStack, Box } from "@chakra-ui/react";
import { GameGrid } from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformsList from "../components/PlatformsList";
import SortOrder from "../components/SortOrder";
import useGameQueryStore from "../store";

const HomePage = () => {
  const store = useGameQueryStore();
  return (
    <>
      <Show above="lg">
        <GridItem paddingX={4} gridArea="aside" paddingY={3}>
          <GenreList
            selectedGenre={store.gameQuery.genreId}
            onSelectGenre={(genre) => store.setGenreId(genre.id)}
          />
        </GridItem>
      </Show>

      <GridItem gridArea="main">
        <Box paddingLeft={2} marginY={4}>
          <GameHeading gameQuery={store.gameQuery} />
          <HStack>
            <PlatformsList
              onSelectPlatform={(platform) => {
                store.setPlatformId(platform.id);
              }}
              selectedPlatform={store.gameQuery.platformId}
            />
            <SortOrder />
          </HStack>
        </Box>

        <GameGrid />
      </GridItem>
    </>
  );
};

export default HomePage;
