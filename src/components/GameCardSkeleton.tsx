import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card overflow="hidden" borderRadius={15} width={"330px"}>
      <Skeleton height={"200px"} />
      <CardBody>
        <SkeletonText skeletonHeight={2} />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
