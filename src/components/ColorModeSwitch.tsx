import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      toggleColorMode();
    }, 25);

    return () => clearTimeout(timeOut);
  }, [toggle]);

  return (
    <HStack marginRight={1}>
      <Switch
        // isChecked={colorMode === "dark"}
        onChange={() => setToggle(!toggle)}
        colorScheme="green"
      />
      <Text whiteSpace="nowrap">
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
