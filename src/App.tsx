import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from '../src/components/NavBar.js'
import GameGrid from './components/GameGrid.js';
import GenreList from './components/GenreList.js';
import { useState } from 'react';
import { Genre } from './hooks/useGenres.js';
import PlatformSelector from './components/PlatformSelector.js';
import { Platform } from './hooks/useGame.js';


function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null >(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null >(null);

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
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main" >
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectedPlatform={platform => setSelectedPlatform(platform)} />
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App
