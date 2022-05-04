import { Heading, Box, Icon, Text, BoxProps } from '@chakra-ui/react';
import { RiCheckLine } from 'react-icons/ri';

interface CardProps extends BoxProps {
  title: string;
  desc: string;
}
export function IconCard({ title, desc, ...rest }: CardProps) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}
