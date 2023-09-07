import { Box, Container, Flex, Image, Link } from '@chakra-ui/react';
import React from 'react';
import logo from '../assets/logo.png';
import bg from '../assets/orig.jpg';

const Header = () => {
  return (
    <Box bgColor="facebook.500" padding={3}>
      <Container
        maxW="container.lg"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Image src={logo} alt="logo" boxSize={90} />
        <Flex gap={4} color="white">
          <Link>О нас</Link>
          <Link>Должности и люди</Link>
          <Link>Тренинги</Link>
          <Link>Конференции</Link>
          <Link>Мероприятия</Link>
        </Flex>
      </Container>
      
    </Box>
  );
};

export default Header;
