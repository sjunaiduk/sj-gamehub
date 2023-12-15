import { useNavigate, useParams } from "react-router-dom";
import useSingleGame from "../hooks/useSingleGame";
import {
  Box,
  Button,
  Container,
  Heading,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const GamePage = () => {
  const params = useParams();
  const nav = useNavigate();
  if (!params.slugOrId) return <h1>Test</h1>;

  const { data: game, isLoading, isError } = useSingleGame(params.slugOrId);
  const [expanded, setExpanded] = useState(false);

  if (isLoading)
    return (
      <Container>
        <Spinner />
      </Container>
    );

  if (!game || isError) return <Text>Error occured</Text>;
  const slicedText = expanded
    ? game?.description_raw
    : game?.description_raw.slice(0, 100) + "...";
  return (
    <Box padding={5}>
      <Button onClick={() => nav("/")}>Back</Button>
      <Heading>{game?.name}</Heading>
      <Text display={"inline"}>{slicedText}</Text>
      <Button
        ml={3}
        size={"sm"}
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Collapse" : "Expand"}
      </Button>
    </Box>
  );
};

export default GamePage;
