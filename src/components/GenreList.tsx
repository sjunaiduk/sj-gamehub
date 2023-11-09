import {
  HStack,
  Text,
  Image,
  List,
  ListItem,
  Spinner,
  Skeleton,
  SkeletonText,
  CardBody,
  Card,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import CropImage from "../services/crop-image";

const GenreList = () => {
  const { data, isLoading } = useGenres();

  //   const data = [
  //     { name: "Action", genre: "Action" },
  //     { name: "Adventure", genre: "Adventure" },
  //     { name: "RPG", genre: "Role-playing" },
  //     { name: "FPS", genre: "First-person shooter" },
  //     { name: "Simulation", genre: "Simulation" },
  //     // Add more genres as needed
  //   ];
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
                <Text>{genre.name}</Text>
              </HStack>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default GenreList;
