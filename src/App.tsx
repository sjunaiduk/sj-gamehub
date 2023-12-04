import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { GameGrid } from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformsList from "./components/PlatformsList";
import GameQuery from "./models/GameQuery";
import SortOrder from "./components/SortOrder";
import GameHeading from "./components/GameHeading";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        lg: "200px 1fr",
      }}
    >
      <GridItem gridArea="nav">
        <Navbar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={4} gridArea="aside" paddingY={3}>
          <GenreList
            selectedGenre={gameQuery.genreId}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
          />
        </GridItem>
      </Show>

      <GridItem gridArea="main">
        <Box paddingLeft={2} marginY={4}>
          <GameHeading gameQuery={gameQuery} />
          <HStack>
            <PlatformsList
              onSelectPlatform={(platform) => {
                setGameQuery({ ...gameQuery, platformId: platform.id });
              }}
              selectedPlatform={gameQuery.platformId}
            />
            <SortOrder
              sortOrderValue={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
        </Box>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
