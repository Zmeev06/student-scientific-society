import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <Box pb={20}>
      <Header />
      <Outlet />
    </Box>
  );
};

export default Layout;
