import Head from 'next/head';
import { Flex, Box, Stack, Text } from '@chakra-ui/react';
import { Header } from '../components/Header';
// import styles from '../styles/common.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alimentos que ajudam a previnir o surgimento do câncer</title>
      </Head>

      <main>
        <Header />

        <Flex p="6">
          <Stack spacing={3}>
            <Text
              color="white"
              fontSize="xl"
              fontFamily="Fira Sans"
              color="green.300"
            >
              SEMINARIO MULTIDISCIPLINAR
            </Text>
            <Text fontSize="3xl" fontFamily="Fira Sans" fontWeight={600}>
              Alimentos que ajudam a previnir o surgimento do câncer
            </Text>

            <Text color="gray.500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eius mod tempor incididunt ut labore et dolore magna aliqua.
              Utenim adminim veniam, quis nostrud exercitation ullam. Fusce
              sodales consequat velit eget dictum. Integer ornare magna vitae
              eleifend congue.
            </Text>
          </Stack>
        </Flex>
      </main>
    </div>
  );
}
