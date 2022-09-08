import { Box, Container, Stack } from '@mui/material';
import Footer from 'components/common/Footer/Footer';
import Header from 'components/common/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const HomeLayout: React.FC = () => {
  return (
    <Container maxWidth='md'>
      <Stack minHeight={'100vh'}>
        <Header />
        <Box component='main' flexGrow={1}>
          {<Outlet />}
        </Box>
      </Stack>
    </Container>
  );
};

export default HomeLayout;
