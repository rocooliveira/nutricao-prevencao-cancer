import {
  Stack,
  Box,
  Heading,
  Avatar,
  BoxProps,
  Text,
  Icon,
  HStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { BiLogoInstagram } from 'react-icons/bi';

interface ProfileCardProps extends BoxProps {
  name: string;
  crn: string;
  pictureUrl: string;
  instagram: string;
}
export function ProfileCard({
  name,
  crn,
  pictureUrl,
  instagram,
  ...rest
}: ProfileCardProps) {
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
          <Avatar
            name={name}
            size="4xl"
            w={32}
            h={32}
            src={pictureUrl}
            fontSize="4xl"
          />
        </Box>
        <Box justifyContent="center">
          <Heading fontSize={['xl', '3xl']} pb={4} textAlign="center">
            {name}
            <Text fontSize="sm" fontWeight="normal">
              {crn}
            </Text>
          </Heading>

          <a href={instagram} target="_blank">
            <HStack justifyContent="center">
              <Icon as={BiLogoInstagram} color="#bc2a8d" />
              <Text fontSize={['sm', 'md']} textAlign="center" color="#bc2a8d">
                Instagram
              </Text>
            </HStack>
          </a>
        </Box>
      </Stack>
    </Box>
  );
}
