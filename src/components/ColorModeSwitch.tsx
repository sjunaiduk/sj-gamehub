import { Button, HStack, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack marginRight={1}>
      <Button onClick={toggleColorMode} size="md" colorScheme="gray">
        {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </HStack>
  );
};

export default ColorModeSwitch;
