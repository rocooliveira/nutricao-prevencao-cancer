import { useRouter } from 'next/router'
import Error from 'next/error';

import { Box, Flex, Image, VStack, Text, Icon, SimpleGrid } from "@chakra-ui/react";
import { Header } from "../../components/Header";

import {BiDish, BiTime, BiGroup, BiBarChartAlt} from 'react-icons/bi'
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
            <VStack align="flex-start" p={6}>
              <Box>
                <Text fontSize={['2xl', '5xl']} fontWeight="bold" fontFamily="Fira Sans">
                  {recipe.title}
                </Text>
              </Box>
              <Box>
                <Text fontSize={['md', '2xl']}>
                  {recipe.desc}
                </Text>
              </Box>


              <SimpleGrid columns={[2, null, null, 4]} spacing={6} pt={6}>
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
            </VStack>
          </Flex>
        </div>

    );    
}

