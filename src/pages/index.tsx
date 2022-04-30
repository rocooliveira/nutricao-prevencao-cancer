import Head from 'next/head';
import { Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alimentos que ajudam a previnir o surgimento do câncer</title>
      </Head>

      <main>
        <Text fontSize="4xl">
          Alimentos que ajudam a previnir o surgimento do câncer
        </Text>
      </main>
    </div>
  );
}
