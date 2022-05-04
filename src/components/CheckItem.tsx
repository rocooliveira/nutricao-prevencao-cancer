import { Box, Icon, Text } from '@chakra-ui/react';
import { RiCheckLine } from 'react-icons/ri';

export function CheckItem({ children }) {
  return (
    <Box display="flex" my={2}>
      <Icon as={RiCheckLine} fontSize={32} color="green.400" />
      <Text pt={[1, 0]} pl={2} fontSize={['md', '2xl']}>
        {children}
      </Text>
    </Box>
  );
}
