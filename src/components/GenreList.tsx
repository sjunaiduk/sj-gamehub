import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Button,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import CropImage from "../services/crop-image";
import { Genre } from "../models/Genre";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading } = useGenres();

  const skeletons = Array(15).fill(0);
  return (
    <>
      {isLoading ? (
        <List>
          {skeletons.map((_, index) => (
            <ListItem key={index} paddingY={"8px"}>
              <HStack>
                <Skeleton
                  borderRadius={5}
                  boxSize="32px"
                  marginRight={2}
                ></Skeleton>
                <SkeletonText noOfLines={1} width="100px" />
              </HStack>
            </ListItem>
          ))}
        </List>
      ) : (
        <List>
          {data.map((genre) => (
            <ListItem key={genre.id} paddingY={"5px"}>
              <HStack>
                <Image
                  src={CropImage(genre.image_background)}
                  alt={genre.name}
                  boxSize="32px"
                  borderRadius={5}
                />
                <Button
                  onClick={() => onSelectGenre(genre)}
                  fontSize={"lg"}
                  variant={"link"}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default GenreList;
