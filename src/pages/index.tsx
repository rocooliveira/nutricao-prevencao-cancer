import Head from 'next/head';
import { Flex, Box, Image, Text } from '@chakra-ui/react';
import { Header } from '../components/Header';
import styles from '../styles/common.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alimentos que ajudam a previnir o surgimento do câncer</title>
      </Head>

      <main>
        <Header />
        <Flex p="6">
          <Box>
            <Text color="green.400" fontSize="xl" fontFamily="Fira Sans">
              SEMINARIO MULTIDISCIPLINAR
            </Text>
            <Text fontSize="5xl" fontFamily="Fira Sans">
              Alimentos que ajudam a previnir o surgimento do câncer
            </Text>
          </Box>
        </Flex>
      </main>
    </div>
  );
}
