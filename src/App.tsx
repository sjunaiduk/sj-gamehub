import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { GameGrid } from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        lg: "max-content 1fr",
      }}
    >
      <GridItem gridArea="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem gridArea="aside">
          <GenreList />
        </GridItem>
      </Show>

      <GridItem gridArea="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
