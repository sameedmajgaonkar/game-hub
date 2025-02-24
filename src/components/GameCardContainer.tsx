import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      _hover={{
        transform: "scale(1.03)",
        transition: "transform 200ms ease-in-out",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
