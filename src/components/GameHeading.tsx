import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatform from "../hook/usePlatform";
import useGenre from "../hook/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {platform?.name} {genre?.name} Games
    </Heading>
  );
};

export default GameHeading;
