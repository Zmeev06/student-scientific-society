import { Button, Container, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function Trainings() {
  return (
    <Flex id="about" flexDirection="column" mt="100px">
      <Container
        maxW="container.sm"
        p="50px"
        border="2px solid #05022D"
        borderRadius={15}
        display="flex"
        flexDirection="column"
      >
        <Heading mb="30px">Тренинги</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex accusamus
          optio, autem quos porro dolorum ipsa vitae sint suscipit molestias,
          quasi architecto a, sunt pariatur voluptatibus harum voluptatum
          molestiae nemo. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ex accusamus optio, autem quos porro dolorum ipsa vitae sint
          suscipit molestias, quasi architecto a, sunt pariatur voluptatibus
          harum voluptatum molestiae nemo. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ex accusamus optio, autem quos porro
          dolorum ipsa vitae sint suscipit molestias, quasi architecto a, sunt
          pariatur voluptatibus harum voluptatum molestiae nemo.
        </Text>
        <Button
          alignSelf="flex-end"
          mt="30px"
          size="lg"
          colorScheme="facebook"
          onClick={() => window.open('https://www.gubkin.ru/')}
        >
          Подробнее
        </Button>
      </Container>
    </Flex>
  );
}

export default Trainings;
