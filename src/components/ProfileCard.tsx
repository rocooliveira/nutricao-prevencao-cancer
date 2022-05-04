import { Stack, Box, Heading, Text, Avatar, BoxProps } from '@chakra-ui/react';

interface ProfileCardProps extends BoxProps {
  name: string;
  pictureUrl: string;
}
export function ProfileCard({ name, pictureUrl, ...rest }: ProfileCardProps) {
  console.log(pictureUrl);
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
        <Box px={5}>
          <Avatar {...name} size="3xl" src={pictureUrl} />
        </Box>
        <Box>
          <Heading fontSize={['xl', '3xl']} pb={4}>
            {name}
          </Heading>
        </Box>
      </Stack>
    </Box>
  );
}
