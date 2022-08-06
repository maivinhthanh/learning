import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

const HomeLayout: React.FC = () => {
  return (
    <>
      <Container maxWidth='md'>
        <Outlet />
      </Container>
    </>
  );
};

export default HomeLayout;
