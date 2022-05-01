import { Stack, Flex, Box, Heading, Image, Text } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h={28}
      mx="auto"
      px="6"
      align="center"
      bg="white"
    >
      <Heading>
        <Stack direction="row">
          <Box>
            <Image
              src="https://raw.githubusercontent.com/rocooliveira/nutricao-prevencao-cancer/master/public/logo-green.jpg"
              w={78}
            />
          </Box>
          <Stack direction="column" pt={3}>
            <Text fontSize="xl">Nutrição</Text>

            <Text fontSize="sm" fontWeight={300} pb={4}>
              Teste teste
            </Text>
          </Stack>
        </Stack>
      </Heading>
    </Flex>
  );
}
