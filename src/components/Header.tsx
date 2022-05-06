import { Stack, Flex, Box, Heading, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';

export function Header() {
  return (
    <Flex
      as="header"
      w="100vw"
      h={28}
      mx="auto"
      px="6"
      align="center"
      bg="white"
    >
      <Heading>
        <Stack direction="row">
          <Box>
            <Link href="/">
              <a>
                <Image
                  src="/img/logo-green.jpg"
                  w={78}
                />
              </a>
            </Link>
          </Box>
          <Stack direction="column" pt={3}>
            <Text fontSize={['xl', '3xl']}>Nutrição</Text>

            <Text fontSize={['sm', 'lg']} fontWeight={300} pb={4}>
              No combate ao câncer
            </Text>
          </Stack>
        </Stack>
      </Heading>
    </Flex>
  );
}
