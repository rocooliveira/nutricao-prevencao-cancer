import { Box , Icon, Text} from '@chakra-ui/react';
import { RiCheckLine } from 'react-icons/ri';


interface CheckItemProps {
  label: string;
}
export function CheckItem() {

  return(
    <Box display="flex" align="flex-end">
      <Icon as={RiCheckLine} fontSize={32} color="green.400" />
      <Text pt={1} pl={2}>Frutas</Text>
    </Box> 
  );
}