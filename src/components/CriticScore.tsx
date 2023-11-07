import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 90 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge paddingInline={2} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
