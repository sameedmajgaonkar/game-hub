import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;

  const limit = 300;
  const exceedsCharLimit = children.length > limit;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summary}{" "}
      {exceedsCharLimit && (
        <Button
          onClick={() => setExpanded(!expanded)}
          marginLeft={1}
          size="sm"
          fontWeight="bold"
          colorScheme="yellow"
        >
          {expanded ? "Show Less" : "Read More"}
        </Button>
      )}
    </Text>
  );
};

export default ExpandableText;
