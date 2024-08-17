import { Heading } from "@chakra-ui/react";
import usePlatform from "../hook/usePlatform";
import useGenre from "../hook/useGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {platform?.name} {genre?.name} Games
    </Heading>
  );
};

export default GameHeading;
