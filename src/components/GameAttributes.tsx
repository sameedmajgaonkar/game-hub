import { SimpleGrid, Text } from "@chakra-ui/react";
import Game from "../entities/Game";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} rowGap={8} mt={5}>
      <DefinitionItem term="Platforms">
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id} color="gray.500">
            {platform.name}
          </Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metacritic">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres?.map((genre) => (
          <Text key={genre.id} color="gray.500">
            {genre.name}
          </Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id} color="gray.500">
            {publisher.name}
          </Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
