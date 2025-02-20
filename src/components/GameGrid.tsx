import { SimpleGrid, Spinner } from "@chakra-ui/react";
import { toast } from "react-toastify";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const fetchedGamesCount = data?.pages.reduce(
    (total, page) => total + page.results.length,
    0
  );

  if (error) return toast("Something went wrong");

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount || 0}
      next={() => fetchNextPage()}
      hasMore={hasNextPage}
      loader={<Spinner size="lg" />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding={5}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page) =>
          page.results.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))
        )}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
