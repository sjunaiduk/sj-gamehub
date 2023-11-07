import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem gridArea="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem gridArea="aside" bg="green.500">
          Aside
        </GridItem>
      </Show>

      <GridItem gridArea="main" bg="pink.500">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
