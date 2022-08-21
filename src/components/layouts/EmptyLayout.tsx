import { Stack, Box } from '@mui/material';
import Footer from 'components/common/Footer/Footer';
import Header from 'components/common/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';


const EmptyLayout: React.FC = () => {
  return (
    <>
      <Stack minHeight={'100vh'}>
        <Header />
        <Box component='main' flexGrow={1}>
          {<Outlet />}
        </Box>
        <Footer />
      </Stack>
    </>
  );
};

export default EmptyLayout;
