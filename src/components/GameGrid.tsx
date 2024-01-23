
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardCotainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
    selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
    const { data, error, isLoading } = useGames(selectedGenre);
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding={10} spacing={3}>
                {isLoading && skeletons.map(skeleton => (
                    <GameCardCotainer key={skeleton} >
                        <GameCardSkeleton />
                    </GameCardCotainer>
                ))}
                {data.map(game => (
                    <GameCardCotainer key={game.id} >
                        <GameCard game={game} />
                    </GameCardCotainer>
                ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid;
