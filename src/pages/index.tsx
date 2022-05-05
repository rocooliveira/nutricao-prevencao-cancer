import Head from 'next/head';
import { Flex, Box, Stack, Image, Text, Icon } from '@chakra-ui/react';
import { RiInkBottleFill, RiInkBottleLine, RiTimeLine } from 'react-icons/ri';
import {
  GiBroccoli,
  GiStrawberry,
  GiOlive,
  GiPeanut,
  GiPowderBag,
  GiTomato,
  GiGarlic,
  GiFlatfish,
} from 'react-icons/gi';
import { Header } from '../components/Header';
import { CheckItem } from '../components/CheckItem';
import { IconCard } from '../components/IconCard';
import CardSlider from '../components/CardSlider';
import { ProfileCard } from '../components/ProfileCard';
import { Footer } from '../components/Footer';

import team from '../utils/team';

import styles from '../styles/common.module.css';
import { RecipesCard } from '../components/RecipesCard';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alimentos que ajudam a prevenir o surgimento do câncer</title>
      </Head>

      <main>
        <Header />

        <Stack>
          {/* HERO */}
          <Flex p={6} direction="column">
            <Stack spacing={3}>
              <Text
                fontSize={['xl', '3xl']}
                fontFamily="Fira Sans"
                color="green.300"
              >
                SEMINARIO MULTIDISCIPLINAR
              </Text>
              <Text
                fontSize={['3xl', '5xl']}
                fontFamily="Fira Sans"
                fontWeight={600}
              >
                Alimentos que ajudam a prevenir o surgimento do câncer
              </Text>

              <Text color="gray.500" fontSize={['md', '2xl']}>
                O que você come pode afetar drasticamente muitos aspectos da sua saúde, incluindo o risco de desenvolver doenças crônicas como doenças cardíacas, diabetes e câncer.
              </Text>

              <Text color="gray.500" fontSize={['md', '2xl']}>
                O desenvolvimento do câncer, em particular, mostrou ser fortemente influenciado pela sua dieta.
              </Text>
             
              <Text color="gray.500" fontSize={['md', '2xl']}>
                Muitos alimentos contêm compostos benéficos que podem ajudar a diminuir o desenvolvimento do câncer.
              </Text>
            </Stack>
          </Flex>

          {/* TYPE LIST  AND FOOD*/}
          <Flex direction="column">
            <Stack bg="white" w="100%" p={6}>
              <Box w={['100%', '50%']} mx="auto">
                <Image  mx="auto" src="https://raw.githubusercontent.com/rocooliveira/nutricao-prevencao-cancer/master/public/img1.jpg" />
              </Box>
              <Stack direction="row" justifyContent="center" pb={3}>
                <Box>
                  <CheckItem>Frutas</CheckItem>
                  <CheckItem>Verduras e Legumes</CheckItem>
                  <CheckItem>Fibras</CheckItem>
                  <CheckItem>Proteínas fonte de ômega3</CheckItem>
                </Box>
              </Stack>
            </Stack>

            <Stack bg="white" py={6}>
              <Flex direction="column" textAlign="center" p={5}>
                <Text
                  fontSize={['xl', '3xl']}
                  fontFamily="Fira Sans"
                  color="green.400"
                  lineHeight="70%"
                >
                  Benefícios
                </Text>
                <Text fontSize={['2xl', '5xl']} fontWeight="bold">
                  Conheça os campeões
                </Text>
              </Flex>

              <Stack bg="orange.50" direction="column" spacing={8} p={6}>
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
                  desc="Corante natural antocianina, potente antioxidante que ajuda na prevenção do câncer. (morango, amora, cereja...)"
                  icon={GiStrawberry}
                />

                <IconCard
                  position="relative"
                  left="0.6rem"
                  title="Canela"
                  desc="Extrato da canela consegue induzir a morte programada das celulas cancerigenas (multações)."
                  icon={RiInkBottleFill}
                />

                <IconCard
                  position="relative"
                  right="0.6rem"
                  title="Oleaginosas"
                  desc="Contem em sua composição o selênio, um potente antioxidante. Auxiliando na redução de biomarcadores relacionados a inflamação."
                  icon={GiPeanut}
                />

                <IconCard
                  position="relative"
                  left="0.6rem"
                  title="Alho"
                  desc="O seu composto chamado alicina, ajuda na eliminação de toxinas e bactérias. Fortificando assim a imunidade."
                  icon={GiGarlic}
                />
              </Stack>

              <Stack bg="white" direction="column" spacing={8} px={6} py={3}>
                <Box position="relative" mt="-3.5rem" mb="-2.5rem">
                  <Image src="https://raw.githubusercontent.com/rocooliveira/nutricao-prevencao-cancer/master/public/eating-healthy-food.svg" />
                </Box>

                <IconCard
                  position="relative"
                  left="0.6rem"
                  title="Azeite Extra Virgem"
                  desc="Por sua ação antioxidante ajuda na diminuição do surgimento  de câncer."
                  icon={GiOlive}
                />

                <IconCard
                  position="relative"
                  right="0.6rem"
                  title="Curcuma"
                  desc="Possui capacidade antioxidante, atuando na diminuição da resposta inflamatória e fortalecendo o organismo."
                  icon={RiInkBottleLine}
                />
                <IconCard
                  position="relative"
                  left="0.6rem"
                  title="Linhaça"
                  desc="Rica em lignanas. Fotoquímicos que se ligam ao estrógeno e assim impedem que ele se prolifere em grande quantidade."
                  icon={GiPowderBag}
                />
                <IconCard
                  position="relative"
                  right="0.6rem"
                  title="Tomate"
                  desc="Rico em licopeno, um tipo de corante lipossolúvel natural, com potencia antioxidante."
                  icon={GiTomato}
                />

                <IconCard
                  position="relative"
                  right="0.6rem"
                  title="Peixes"
                  desc="Peixes como sardinha, cavala, atum são ricos em ômega 3 e vitamina D. Fortalecendo o organismo e prevenindo o câncer, por ação anti-inflamatória."
                  icon={GiFlatfish}
                />
              </Stack>
            </Stack>
          </Flex>

          {/* Dicas */}
          <Stack pt={6} spacing={8}>
            <Flex px={6} direction="column">
              <Stack spacing={6}>
                <Box textAlign="center">
                  <Text
                    fontFamily="Fira Sans"
                    color="green.400"
                    fontSize={['2xl', '4xl']}
                    lineHeight="70%"
                  >
                    Dicas
                  </Text>
                  <Text fontSize={['2xl', '5xl']} fontWeight="bold">
                    Pratique exercícios
                  </Text>
                </Box>

                <Stack
                  direction="column"
                  justify="space-between"
                  minH={500}
                  className={styles.imgFitnessDark}
                >
                  <Box p={4}>
                    <Stack direction="row" align="center">
                      <Icon
                        as={RiTimeLine}
                        fontSize={['4xl', '6xl']}
                        color="green.200"
                      />
                      <Text
                        color="white"
                        fontSize={['sm', '4xl']}
                        fontFamily="Fira Sans"
                      >
                        30 à 60 min/dia
                      </Text>
                      <Text fontSize={['xs', '2xl']} color="white">
                        (Recomendação OMS)
                      </Text>
                    </Stack>
                  </Box>
                  <Box textAlign="right" px={4} pb={4}>
                    <Text
                      as="b"
                      fontSize={['xl', '4xl']}
                      fontFamily="Fira Sans"
                      color="white"
                    >
                      Para que sua vida fique ainda mais saudável, pratique
                      atividades fisicas caso não tenha restrições médicas
                    </Text>
                  </Box>
                </Stack>
              </Stack>
            </Flex>

            <Flex px={6} pb={6} direction="column">
              <Stack spacing={6}>
                <Box textAlign="center">
                  <Text
                    fontFamily="Fira Sans"
                    color="green.400"
                    fontSize={['xl', '4xl']}
                    lineHeight="70%"
                  >
                    Dicas
                  </Text>
                  <Text fontSize={['2xl', '5xl']} fontWeight="bold">
                    Tenha bons hábitos alimentares.
                  </Text>
                </Box>

                <Stack
                  direction="column"
                  justify="flex-end"
                  minH={500}
                  className={styles.imgGoodEatingDark}
                >
                  <Box textAlign="right" px={4} pb={4}>
                    <Text
                      as="b"
                      fontSize={['xl', '4xl']}
                      fontFamily="Fira Sans"
                      color="white"
                    >
                      Uma alimentação saudável previne vários tipos de doenças
                      não transmissíveis, incluindo o câncer.
                    </Text>
                  </Box>
                </Stack>
              </Stack>
            </Flex>
          </Stack>

          {/* HELP IMMUNITY  */}
          <Stack px={6} py={10} bg="orange.50">
            <Box textAlign="center">
              <Text
                fontFamily="Fira Sans"
                color="green.400"
                fontSize={['2xl', '4xl']}
                lineHeight="70%"
              >
                Imunidade
              </Text>
              <Text fontSize={['2xl', '5xl']} fontWeight="bold">
                "Ajudar o sistema imunológico é um fator super importante para a
                prevenção do câncer."
              </Text>
            </Box>

            <Box>
              <Image src="https://raw.githubusercontent.com/rocooliveira/nutricao-prevencao-cancer/master/public/breast-cancer-awareness-animate.svg" />
            </Box>
          </Stack>
        </Stack>


        <Stack bg="green.300" pt={1}>
          <Box 
            textAlign="center"
            bg="white"
            p={6}
            pt={9}
            pb={0}
            borderBottom={1}
            borderStyle="solid"
            borderColor="green.200"
          >
            <Text
              fontFamily="Fira Sans"
              color="green.400"
              fontSize={['2xl', '4xl']}
              lineHeight="70%"
            >
              Refeições
            </Text>
            <Text fontSize={['2xl', '5xl']} fontWeight="bold">
              Sugestão de cardápio
            </Text>
            <Text fontSize={['sm', 'xl']} fontWeight="bold" color="gray.500" mt={3} mb={4}>
              Aproveite nossas dicas e prepare uma refeição saudável e apetitosa.
            </Text>

            <Box h={['5rem', '12rem']} overflow="hidden">
              <Image src="./img/plate_rounded-1024x1024.jpg" mx="auto" />
            </Box>
          </Box>
          <Flex p={6} backgroundImage="url(./img/veg_pattern01.png)">
            <Stack direction="column" mx="auto" w="100%" pt={6} spacing={6}>

              <RecipesCard 
                title='Geleia de Frutas Vermelhas' 
                subTitle='Naturalmente doce e dispensa adição de açucar.' 
                picture='./img/geleia-frutas-vermelhas.png'
                url='/receita/geleia-frutas-vermelhas'
              />

              <RecipesCard 
                title='Suflê de Brócolis' 
                subTitle=' Simples, rápido e delicioso!' 
                picture='./img/sufle-de-brocolis.png'
                url='/receita/sufle-brocolis'
              />

            </Stack>
          </Flex>
        </Stack>


        <Stack py={8} px={6}>
          <Box textAlign="center" pb={4}>
            <Text
              fontFamily="Fira Sans"
              color="green.400"
              fontSize={['2xl', '4xl']}
              lineHeight="70%"
            >
              Alunos
            </Text>
            <Text fontSize={['2xl', '5xl']} fontWeight="bold">
              Integrantes desta equipe
            </Text>
          </Box>
          <CardSlider gap={32}>
            {team.map((people, index) => (
              <ProfileCard
                key={index}
                name={people.name}
                pictureUrl={people.pictureUrl}
              />
            ))}
          </CardSlider>
        </Stack>

        <Footer />
      </main>
    </div>
  );
}
