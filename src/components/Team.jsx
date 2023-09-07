import { Box, Button, Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import photo from '../assets/Ruslan.jpg';
import Member from './Member';

function Team() {
  const team = [
    {
      photo: photo,
      name: 'Руслан Шаповалов',
    },
    {
      photo: photo,
      name: 'Руслан Шаповалов',
    },
    {
      photo: photo,
      name: 'Руслан Шаповалов',
    },
    {
      photo: photo,
      name: 'Руслан Шаповалов',
    },
    {
      photo: photo,
      name: 'Руслан Шаповалов',
    },
    {
      photo: photo,
      name: 'Руслан Шаповалов',
    },
    {
      photo: photo,
      name: 'Руслан Шаповалов',
    },
  ];
  return (
    <Box bgColor="blackAlpha.200" mt="100px">
      <Container
        maxW="container.lg"
        p="20px"
        display="flex"
        flexDirection="column"
      >
        <Heading mb="20px">Наша команда:</Heading>
        <Flex overflowX="scroll" gap={5}>
          {team.map((item, index) => (
            <Member key={index} photo={item.photo} name={item.name} />
          ))}
        </Flex>
        <Button colorScheme="facebook" size="lg" alignSelf="flex-end" mt="20px">
          Подробнее
        </Button>
      </Container>
    </Box>
  );
}

export default Team;
