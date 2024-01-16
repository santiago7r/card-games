import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import useGames from "../hooks/useGame";

const GameCardSkeleton = () => {
    const { games, error } = useGames();

    return (
        <Card width='300px'>
            <Skeleton height="200px" />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    )
}

export default GameCardSkeleton;