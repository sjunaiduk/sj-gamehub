import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchGamesInput from "./SearchGamesInput";
const Navbar = () => {
  return (
    <HStack>
      <HStack>
        <Image src={logo} minWidth={"65px"} width={"65px"}></Image>
      </HStack>
      <SearchGamesInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
