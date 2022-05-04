import {
  Stack,
  Flex,
  Box,
  Icon,
  Text,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';

import { GiOpenBook } from 'react-icons/gi';
import { BiLinkExternal } from 'react-icons/bi';
import styles from '../styles/common.module.css';

export function Footer() {
  return (
    <footer>
      <Stack>
        <Box className={styles.footerOverlayMainWaves} />
        <Box className={styles.footerOverlayBlackWaves} />
      </Stack>

      <Flex
        bg="gray.800"
        position="relative"
        direction="column"
        w="100%"
        top={10}
        py={12}
      >
        <Stack p={6} spacing={4}>
          <Box>
            <Text as="b" fontSize={['md', '3xl']}>
              SEMINARIO MULTIDISCIPLINAR
            </Text>
          </Box>
          <Box display="flex">
            <Text as="b" pr={3} fontSize={['md', '2xl']}>
              Professora:
            </Text>
            <Text fontSize={['md', '2xl']}>Vanessa Rodriges</Text>
          </Box>
          <Box display="flex">
            <Text as="b" pr={3} fontSize={['md', '2xl']}>
              Turma:
            </Text>
            <Text fontSize={['md', '2xl']}>Nutrição - Noite</Text>
          </Box>
        </Stack>

        <Stack p={6} spacing={4}>
          <Box>
            <Text as="b" fontSize={['md', '3xl']}>
              BIBLIOGRAFIAS
            </Text>
          </Box>

          <Box>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={GiOpenBook} color="green.400" />
                <a
                  target="_blank"
                  href="https://www.publicacoesacademicas.uniceub.br/cienciasaude/article/download/514/335#:~:text=Dieta%20como%20agente%20preventivo%20e%20redutor%20do%20c%C3%A2ncer&text=A%20alimenta%C3%A7%C3%A3o%20pode%20modificar%20o,reduzir%20o%20risco%20de%20c%C3%A2ncer."
                >
                  <Box as="span">
                    A influência da alimentação como agente precursor,
                    preventivo e redutor do câncer
                  </Box>
                  <Box as="span" pl={1}>
                    <Icon as={BiLinkExternal} />
                  </Box>
                </a>
              </ListItem>
              <ListItem>
                <ListIcon as={GiOpenBook} color="green.400" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Flex>
    </footer>
  );
}
