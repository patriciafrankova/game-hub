import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshots from "../hook/useScreenshots";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (error) throw error;

  if (isLoading) return <Spinner />;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((screenshot) => (
        <Image key={screenshot.id} src={getCroppedImageUrl(screenshot.image)} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
