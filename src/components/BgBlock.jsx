import { Flex, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import bg from '../assets/orig.jpg';
import { ArrowDownIcon } from '@chakra-ui/icons';

function BgBlock() {
  const scroll = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <Flex position="relative" flexDirection="column">
        <Image src={bg} w="100vw" h="86vh" objectFit="cover" />
        <Heading
          position="absolute"
          bottom={250}
          left={15}
          w="675px"
          textAlign="right"
          color="white"
          size="2xl"
        >
          СНО РГУ нефти и газа (НИУ) имени И.М. Губкина
        </Heading>
        <ArrowDownIcon
          position="absolute"
          boxSize={12}
          color="white"
          translateX={-12}
          cursor="pointer"
          className="arrow"
          onClick={() => scroll()}
        />
      </Flex>
    </>
  );
}

export default BgBlock;
