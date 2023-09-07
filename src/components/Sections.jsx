import { Button, Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

function Sections() {
  const sections = [
    {
      title: 'Должности и люди',
      href: '/team',
    },
    {
      title: 'Тренинги',
      href: '/team',
    },
    {
      title: 'Конференции',
      href: '/team',
    },
    {
      title: 'Мероприятия',
      href: '/team',
    },
  ];
  return (
    <Container maxW="container.md" mt="70px">
      <Heading margin="0 auto" w="fit-content" mb={7}>Навигация по сайту:</Heading>
      <Flex justifyContent="center" flexWrap="wrap" gap="10px">
        {sections.map((item, index) => (
          <Button key={index} size="lg" colorScheme="facebook">{item.title}</Button>
        ))}
      </Flex>
    </Container>
  );
}

export default Sections;
