import { Stack, Box, Heading, Avatar, BoxProps } from '@chakra-ui/react';

interface ProfileCardProps extends BoxProps {
  name: string;
  pictureUrl: string;
}
export function ProfileCard({ name, pictureUrl, ...rest }: ProfileCardProps) {
  
  return (
    <Box
      {...rest}
      p={6}
      mx="auto"
      py={[6, 12]}
      w="80%"
      bg="white"
      borderRadius="lg"
      shadow="md"
      borderWidth="1px"
    >
      <Stack direction="column" align="center" spacing={10}>
        <Box px={5} >
          <Avatar name={name} size="4xl" w={32} h={32} src={pictureUrl} fontSize="4xl"   />
        </Box>
        <Box>
          <Heading fontSize={['xl', '3xl']} pb={4} textAlign="center">
            {name}
          </Heading>
        </Box>
      </Stack>
    </Box>
  );
}


