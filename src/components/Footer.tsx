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
import BibliographyListItem from './BibliographyListItem';

export function Footer() {
  return (
    <footer style={{ marginTop: -40 }}>
      <Stack display={{ base: 'flex', md: 'none' }}>
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
        {/* <Stack p={6} spacing={4}>
          <Box>
            <Text as="b" fontSize={['md', '3xl']}>
              Dhara Hentzy / CRN - 23103921
            </Text>
          </Box>
        </Stack> */}

        <Stack p={6} spacing={4}>
          <Box>
            <Text as="b" fontSize={['md', '3xl']}>
              BIBLIOGRAFIAS:
            </Text>
          </Box>

          <Box>
            <List spacing={4}>
              <BibliographyListItem
                title="A influência da alimentação como agente precursor, preventivo e redutor do câncer"
                url="https://www.publicacoesacademicas.uniceub.br/cienciasaude/article/download/514/335#:~:text=Dieta%20como%20agente%20preventivo%20e%20redutor%20do%20c%C3%A2ncer&text=A%20alimenta%C3%A7%C3%A3o%20pode%20modificar%20o,reduzir%20o%20risco%20de%20c%C3%A2ncer."
              />

              <BibliographyListItem
                title="Eficiência de óleos essenciais de canela e cravo-da-índia como sanitizantes na indústria de alimentos"
                url="https://www.scielo.br/j/pat/a/qpd85XYJwWrnFmSt3DKpCXh/?format=pdf&lang=pt"
              />

              <BibliographyListItem
                title="Licopeno como agente antioxidante"
                url="https://www.scielo.br/j/rn/a/sJ6qRLvhXvkQR6CjnKgZN7K/?lang=pt"
              />

              <BibliographyListItem
                title="OS BENEFÍCIOS MEDICINAIS DA Curcuma longa L. (AÇAFRÃO DA TERRA)"
                url="https://repositorio.faema.edu.br/bitstream/123456789/2450/1/OS%20BENEF%c3%8dCIOS%20MEDICINAIS%20DA.pdf"
              />

              <BibliographyListItem
                title="OMS lança novas diretrizes sobre atividade física e comportamento sedentário (Nações Unidas Brasil - 26/11/2020)"
                url="https://brasil.un.org/pt-br/102689-oms-lanca-novas-diretrizes-sobre-atividade-fisica-e-comportamento-sedentario#:~:text=As%20novas%20diretrizes%20recomendam%20pelo%20menos%20150%20a,60%20minutos%20por%20dia%20para%20crian%C3%A7as%20e%20adolescentes."
              />
            </List>
          </Box>
        </Stack>
      </Flex>
    </footer>
  );
}
