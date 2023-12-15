import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const LayoutPage = () => {
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
        <Navbar />
      </GridItem>

      <Outlet />
    </Grid>
  );
};

export default LayoutPage;
