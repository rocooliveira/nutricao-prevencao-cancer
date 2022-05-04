import { Stack, Flex, Box, Image, Text, Fo } from '@chakra-ui/react';
import styles from '../styles/common.module.css';

export function Footer() {
  return (
    <footer>
      <Flex>
        <Stack>
          <Box className={styles.footerOverlayMainWaves} />
          <Box className={styles.footerOverlayBlackWaves} />
        </Stack>
        <Stack bg="gray.800" position="relative" w="100%" top={10}>
          <Box p={6} mt={12}>
            <Text as="b" fontSize={['md', '2xl']}>
              SEMINARIO MULTIDISCIPLINAR
            </Text>
            <Text>fsfs</Text>
            <Text>fsfs</Text>
          </Box>
        </Stack>
      </Flex>
    </footer>
  );
}
