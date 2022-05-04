import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      },
      footer: {
        color: 'white',
        fontFamily: 'Fira Sans',
      },
    },
  },
  fonts: {
    heading: 'Fira Sans',
    body: 'Open Sans',
  },
});
