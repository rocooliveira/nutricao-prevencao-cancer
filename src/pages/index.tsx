import Head from 'next/head';
import { Flex, Box, Stack, Image, Text, Icon } from '@chakra-ui/react';
import { RiInkBottleFill, RiInkBottleLine } from 'react-icons/ri';
import { GiBroccoli, GiStrawberry, GiPeanut } from 'react-icons/gi';
import { Header } from '../components/Header';
import { CheckItem } from '../components/CheckItem';
import { IconCard } from '../components/IconCard';

// import styles from '../styles/common.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alimentos que ajudam a previnir o surgimento do câncer</title>
      </Head>

      <main>
        <Header />

        <Stack>
          {/* HERO */}
          <Flex p={6} direction="column">
            <Stack spacing={3}>
              <Text fontSize="xl" fontFamily="Fira Sans" color="green.300">
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

          {/* TYPE LIST  AND FOOD*/}
          <Flex direction="column">
            <Stack bg="white" w="100%" p={6}>
              <Image src="https://raw.githubusercontent.com/rocooliveira/nutricao-prevencao-cancer/master/public/img1.jpg" />

              <Stack direction="row" justifyContent="center" pb={3}>
                <Box>
                  <CheckItem>Frutas</CheckItem>
                  <CheckItem>Verduras e Legumes</CheckItem>
                  <CheckItem>Fibras</CheckItem>
                  <CheckItem>Proteínas fonte de ômega3</CheckItem>
                </Box>
              </Stack>
            </Stack>

            <Stack bg="white" pt={6}>
              <Flex direction="column" textAlign="center" p={5}>
                <Text
                  fontFamily="Fira Sans"
                  color="green.4peanut00"
                  fontSize="xl"
                  lineHeight="70%"
                >
                  Benefícios
                </Text>
                <Text fontSize="2xl" fontWeight="bold">
                  Conheça os campeões
                </Text>
              </Flex>

              <Stack
                bg="orange.50"
                direction="column"
                spacing={8}
                p={6}
              >
                <IconCard
                  position="relative"
                  left="0.8rem"
                  title="Brócolis"
                  desc="Um alimento rico em sulforafano, um nutriente que diminui a agressividade e o crescimento do câncer."
                  icon={GiBroccoli}
                />

                <IconCard
                  position="relative"
                  right="0.6rem"
                  title="Frutas Vermelhas"
                  desc="Corante natural antocianina, potente antiocidante que ajuda na prevenção do câncer. (morango, amora, cereja...)"
                  icon={GiStrawberry}
                />

                <IconCard
                  position="relative"
                  left="0.6rem"
                  title="Canela"
                  desc="A canela em pau ou em pó consegue induzir  a morte programada das células canceriginas (mutações)."
                  icon={RiInkBottleFill}
                />

                <IconCard
                  position="relative"
                  right="0.6rem"
                  title="Oleaginosas"
                  desc="Contem em sua composição o selênio, um potente antioxidante. Auxiliando na redução de biomarcadores relacionados a inflamação."
                  icon={RiInkBottleFill}
                />
              </Stack>
            </Stack>
          </Flex>
        </Stack>
      </main>
    </div>
  );
}
