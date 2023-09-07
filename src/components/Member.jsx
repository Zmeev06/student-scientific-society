import { Card, CardBody, Heading, Image, Stack } from '@chakra-ui/react';
import React from 'react';

function Member({ photo, name }) {
  return (
    <Card maxW="sm" minW="64">
      <CardBody>
        <Image src={photo} alt="photo" borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Member;
