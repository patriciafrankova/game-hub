import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hook/useGames";
import useGenres from "../hook/useGenres";
import usePlatforms from "../hook/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {platform?.name} {genre?.name} Games
    </Heading>
  );
};

export default GameHeading;
