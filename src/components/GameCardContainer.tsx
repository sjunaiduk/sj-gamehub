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
        md: "304px",
      }}
      overflow="hidden"
      borderRadius={15}
      marginInline="auto"
    >
      {children}
    </Box>
  );
};
