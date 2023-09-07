import { Box } from '@chakra-ui/react';
import React from 'react';
import BgBlock from '../components/BgBlock';
import About from '../components/About';
import Team from '../components/Team';
import Trainings from '../components/Trainings';

function MainPage() {
  return (
    <Box>
      <BgBlock />
      <About />
      <Team />
      <Trainings />
    </Box>
  );
}

export default MainPage;
