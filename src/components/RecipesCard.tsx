import { Box, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

interface RecipesCardProps{
  title:    string;
  subTitle: string;
  picture:  string;
  url:  string;
}
export function RecipesCard({title, subTitle, picture, url}: RecipesCardProps){
    return(
        <Box
          p={6}
          py={[6, 12]}
          pt={[6, 36]}
          mt={[20, 52]}
          w="100%"
          bg="white"
          borderRadius="xl"
          shadow="md"
          borderWidth="1px"
        >
          <Link href={url}>
            <a>
              <Stack>
                  <Box 
                    mt={['-6rem', '-14rem']}
                  >
                      <Image src={picture} w={['70%', '60%']} mx="auto"/>
                  </Box>
                  <Box>
                    <Text fontSize={['xl', '2xl']} fontWeight="bold">{title}</Text>
                    <Text mt={4} fontSize={['md', '2xl']}>{subTitle}</Text>
                  </Box>
                  <Box textAlign="right">
                    <Text as="u" fontSize={['xs', 'xl']} color="green.400" fontWeight="bold">Ver receita</Text>
                  </Box>
              </Stack>
              </a>
          </Link>
        </Box>
    );
}