import { AspectRatio } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data } = useTrailers(gameId);
  const trailer = data?.results[0];

  return trailer ? (
    <AspectRatio ratio={16 / 9}>
      <video
        src={trailer.data.max}
        poster={trailer.preview}
        controls
        autoPlay
        muted
      />
    </AspectRatio>
  ) : null;
};

export default GameTrailer;
