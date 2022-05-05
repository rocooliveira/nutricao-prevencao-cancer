import { useRouter } from 'next/router'
import Error from 'next/error';

import { Box, Flex, Image, VStack, Text, Icon, SimpleGrid, UnorderedList, ListItem, OrderedList } from "@chakra-ui/react";

import {BiDish, BiTime, BiGroup, BiBarChartAlt} from 'react-icons/bi'

import { Header } from "../../components/Header";

import styles from '../../styles/common.module.css';

import recipes from "../../utils/recipes";

type recipeInfoProps = {
  ingredientAmount: number;
  serves?: number;
  time: number;
  level: string;

}
type recipeProps = {
  title: string;
  desc?: string;
  info: recipeInfoProps;
  ingredients: [];
  directions: [];
}

export default function Recipes({params}){
    const router = useRouter()

    const {slug} = router.query;

    if( ! recipes[`${slug}`] ){
        return <Error statusCode={404}/>
    }

    const recipe:recipeProps = recipes[`${slug}`];


    return(
        <div>
          <Header/>
          <Flex>
            <Box w="full">
              <Image src="https://i.pinimg.com/564x/b4/32/24/b43224123a290b8cea009304af2bb612.jpg" w="full"/>
            </Box>
          </Flex>
          <Flex>
            <VStack align="flex-start" p={6} spacing={6}>

              <Box>
                <Text fontSize={['2xl', '5xl']} fontWeight="bold" fontFamily="Fira Sans">
                  {recipe.title}
                </Text>
              </Box>

              <Box>
                <Text fontSize={['md', '3xl']}>
                  {recipe.desc}
                </Text>
              </Box>

              <SimpleGrid columns={[2, null, null, 4]} spacing={6} py={4}>
                <Box display="flex" flexDirection="row" alignItems="center">
                  <Icon as={BiDish} color="green.400" boxSize={[7, 14]} mr={3}/>
                  <Text fontSize={['sm', '3xl']}  >{recipe.info.ingredientAmount} ingredientes</Text>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center">
                  <Icon as={BiTime} color="green.400" boxSize={[7, 14]} mr={3}/>
                  <Text fontSize={['sm', '3xl']}>{recipe.info.time} minutos</Text>
                </Box>
                { recipe.info.serves && (
                    <Box display="flex" flexDirection="row" alignItems="center">
                      <Icon as={BiGroup} color="green.400" boxSize={[7, 14]} mr={3}/>
                      <Text fontSize={['sm', '3xl']}>{recipe.info.serves} pessoas</Text>
                    </Box>
                  )
                }
                <Box display="flex" flexDirection="row" alignItems="center">
                  <Icon as={BiBarChartAlt} color="green.400" boxSize={[7, 14]} mr={3}/>
                  <Text fontSize={['sm', '3xl']} >Dificuldade {recipe.info.level}</Text>
                </Box>
              </SimpleGrid>

              <Box>
                <Text fontSize={['2xl', '5xl']} fontWeight="bold" fontFamily="Fira Sans">
                  Ingredientes
                </Text>
              </Box>

              <Box>
                <UnorderedList spacing={2} pl={2}>
                  {recipe.ingredients.map( (item, index) => (
                    <ListItem 
                      key={index} 
                      fontSize={['md', '3xl']}
                    >
                      {item}
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>
              <Box>

                <Text fontSize={['2xl', '5xl']} fontWeight="bold" fontFamily="Fira Sans">
                  Modo de Preparo
                </Text>
              </Box>

              <Box>
                <OrderedList className={styles.numberListG} spacing={2} pl={2}  >
                    {recipe.directions.map( (item, index) => (
                      <ListItem 
                        key={index} 
                        fontSize={['md', '3xl']}
                        dangerouslySetInnerHTML={{__html: item}}
                      />
                    ))}
                  </OrderedList>
              </Box>

            </VStack>
          </Flex>
        </div>

    );    
}

