import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem gridArea="nav" h="10" bg="pink.500">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem gridArea="aside" h="10" bg="pink.500">
          Aside
        </GridItem>
      </Show>

      <GridItem gridArea="main" h="10" bg="pink.500">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
