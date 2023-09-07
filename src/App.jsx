import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<MainPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
