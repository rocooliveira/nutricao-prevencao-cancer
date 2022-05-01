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

        <Flex>
          <Box>
            <Image
              className={styles.mainImage}
              w="101%"
              h="md"
              src="https://raw.githubusercontent.com/rocooliveira/nutricao-prevencao-cancer/master/public/slide_01.jpg"
            />
          </Box>

          <Flex p="6">
            <Box>
              <Text color="white" fontSize="xl" fontFamily="Fira Sans">
                SEMINARIO MULTIDISCIPLINAR
              </Text>
              <Text
                fontSize="5xl"
                fontFamily="Fira Sans"
                fontWeight={600}
                color="white"
              >
                Alimentos que ajudam a previnir o surgimento do câncer
              </Text>
            </Box>
          </Flex>
        </Flex>
      </main>
    </div>
  );
}
