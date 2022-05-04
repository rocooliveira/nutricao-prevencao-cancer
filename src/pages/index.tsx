import Head from 'next/head';
import { Flex, Box, Stack, Image, Text, Icon } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { CheckItem } from '../components/CheckItem';

// import styles from '../styles/common.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alimentos que ajudam a previnir o surgimento do câncer</title>
      </Head>

      <main>
        <Header />

        <Flex p="6" direction="column" mb={8}>
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

        <Flex direction="column">
          <Stack bg="white" w="100%" p="6">
            <Image src="https://raw.githubusercontent.com/rocooliveira/nutricao-prevencao-cancer/master/public/img1.jpg" />

            <Stack direction="row" justifyContent="center">
              <Box>
                <CheckItem>Frutas</CheckItem>
                <CheckItem>Verduras e Legumes</CheckItem>
                <CheckItem>Fibras</CheckItem>
                <CheckItem>Proteínas fonte de ômega3</CheckItem>
              </Box>
            </Stack>
          </Stack>
        </Flex>
      </main>
    </div>
  );
}
