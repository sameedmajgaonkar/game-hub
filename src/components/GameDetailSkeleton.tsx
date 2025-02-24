import {
  Box,
  Card,
  CardBody,
  CardHeader,
  SimpleGrid,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GameDetailSkeleton = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <Box>
        <Card>
          <CardHeader>
            <SkeletonText />
          </CardHeader>
          <CardBody>
            <Skeleton height="200px" />
          </CardBody>
        </Card>
      </Box>
      <Box>
        <SimpleGrid gap={5} columns={3}>
          <Skeleton height="400px" gridColumn="1/-1" />
          <Skeleton height="100px" />
          <Skeleton height="100px" />
          <Skeleton height="100px" />
        </SimpleGrid>
      </Box>
    </SimpleGrid>
  );
};

export default GameDetailSkeleton;
