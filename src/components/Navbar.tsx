import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchGamesInput from "./SearchGamesInput";

interface Props {
  onSearch: (query: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack>
      <HStack>
        <Image src={logo} minWidth={"65px"} width={"65px"}></Image>
      </HStack>
      <SearchGamesInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
