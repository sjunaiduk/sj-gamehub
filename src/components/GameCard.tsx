import { Game } from "../models/Game";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import CropImage from "../services/crop-image";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image
        src={
          game?.background_image
            ? CropImage(game?.background_image)
            : "https://www.scotsman.com/webimg/b25lY21zOjA0NDEwNDNjLWUwYzktNGU5Yi05ZGYwLWFkNzk5MjliYWM1NTpkYzRlM2UyZi1mMTI1LTRkNmQtYTcxOC0zYjJlNDcwMTE5Nzc=.jpg?width=1200&enable=upscale"
        }
      />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconsList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
