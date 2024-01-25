import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from '../src/components/NavBar.js'
import GameGrid from './components/GameGrid.js';
import GenreList from './components/GenreList.js';
import { useState } from 'react';
import { Genre } from './hooks/useGenres.js';
import PlatformSelector from './components/PlatformSelector.js';
import { Platform } from './hooks/useGame.js';
import SortSelector from './components/SortSelector.js';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}


function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr '
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5} >
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} />
        </GridItem>
      </Show>
      <GridItem area="main" >
        <HStack spacing={5} paddingLeft={9} marginBottom={5}>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={platform => setGameQuery({...gameQuery, platform})} />
          <SortSelector />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App
