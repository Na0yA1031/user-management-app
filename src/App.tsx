import React from 'react';
import './App.css';
import { Button, ChakraProvider } from '@chakra-ui/react';
import theme from './teme/theme';

function App() {
  return (
    <ChakraProvider theme={theme} >
      <Button colorScheme='teal' >ボタン</Button>
      <p>aaaaaaa</p>
    </ChakraProvider>
  );
}

export default App;
