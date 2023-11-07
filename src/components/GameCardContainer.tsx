import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width={{
        base: "350px",
        md: "300px",
        lg: "270px",
        xl: "220px",
      }}
      overflow="hidden"
      borderRadius={15}
    >
      {children}
    </Box>
  );
};
