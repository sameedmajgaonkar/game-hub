import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode;
}
const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd style={{ paddingBlock: "1rem" }}>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
