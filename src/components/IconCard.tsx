import { Heading, HStack, Box, Text, BoxProps, Icon } from '@chakra-ui/react';

import { IconBaseProps } from 'react-icons';
import { FunctionComponent } from 'react';

interface CardProps extends BoxProps {
  title: string;
  desc: string;
  icon: FunctionComponent;
}

export function IconCard({ title, desc, icon, ...rest }: CardProps) {
  return (
    <Box
      p={6}
      w="100%"
      bg="white"
      borderRadius="lg"
      shadow="md"
      borderWidth="1px"
      {...rest}
    >
      <HStack>
        <Box>
          <Icon as={icon} fontSize={[46, 70]} color="green.400" />
        </Box>
        <Box>
          <Heading fontSize={['xl', '3xl']} lineHeight={0}>
            {title}
          </Heading>
          <Text mt={4} fontSize={['sm', '2xl']}>
            {desc}
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}
