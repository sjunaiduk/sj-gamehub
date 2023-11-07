import { HStack, Text, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import CropImage from "../services/crop-image";

const GenreList = () => {
  const { data } = useGenres();

  //   const data = [
  //     { name: "Action", genre: "Action" },
  //     { name: "Adventure", genre: "Adventure" },
  //     { name: "RPG", genre: "Role-playing" },
  //     { name: "FPS", genre: "First-person shooter" },
  //     { name: "Simulation", genre: "Simulation" },
  //     // Add more genres as needed
  //   ];
  return (
    <List>
      {data.map((genre) => (
        <ListItem paddingY={"5px"}>
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
  );
};

export default GenreList;
