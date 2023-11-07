import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const Navbar = () => {
  return (
    <HStack marginInline={1} justifyContent="space-between">
      <HStack>
        <Image src={logo} boxSize={"60px"}></Image>
        <Text>NavBar</Text>
      </HStack>

      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
