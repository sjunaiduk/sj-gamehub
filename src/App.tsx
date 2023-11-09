import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { GameGrid } from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformsList from "./components/PlatformsList";
import GameQuery from "./models/GameQuery";
import SortOrder from "./components/SortOrder";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        lg: "255px 1fr",
      }}
    >
      <GridItem gridArea="nav">
        <Navbar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={5} gridArea="aside">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>

      <GridItem gridArea="main">
        <HStack paddingLeft={2}>
          <PlatformsList
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            selectedPlatform={gameQuery.platform}
          />
          <SortOrder
            sortOrderValue={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
