import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <List>
      {skeletons.map((s) => (
        <ListItem key={s} paddingY={2}>
          <HStack>
            <Skeleton boxSize="32px" borderRadius={8} aspectRatio="1/1" />
            <SkeletonText width="70%" />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
