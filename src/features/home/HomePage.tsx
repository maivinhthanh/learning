import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { ReactComponent as Union } from 'assets/icons/Union.svg';
import React from 'react';
import { ReactComponent as Peeps } from 'assets/images/Peeps.svg';

import { ReactComponent as Logo1 } from 'assets/icons/LogoIcon/Logo1.svg';
import { ReactComponent as Logo2 } from 'assets/icons/LogoIcon/Logo2.svg';
import { ReactComponent as Logo3 } from 'assets/icons/LogoIcon/Logo3.svg';
import { ReactComponent as Logo4 } from 'assets/icons/LogoIcon/Logo4.svg';
import { ReactComponent as Logo5 } from 'assets/icons/LogoIcon/Logo5.svg';
import { ReactComponent as Logo6 } from 'assets/icons/LogoIcon/Logo6.svg';
import FunctionsSection from './FunctionsSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          maxWidth: 500,
          marginX: 'auto',
          marginY: 12,
        }}
      >
        <Stack spacing={2} sx={{ mb: 5 }}>
          <Stack direction='row' spacing={2}>
            <Typography
              variant='h2'
              gutterBottom
              sx={{ width: 380, marginLeft: -16 }}
              data-testid="title"
            >
              We turn ideas
            </Typography>
            <Union width={200} />
          </Stack>
          <Typography variant='h2' gutterBottom>
            into your project
          </Typography>
          <Typography
            variant='body1'
            gutterBottom
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '2',
              WebkitBoxOrient: 'vertical',
              maxWidth: 500,
            }}
          >
            Empowering your business by strategy and our experience.We care
            about our employees
          </Typography>
          <Stack direction='row' spacing={2} justifySelf={'flex-start'}>
            <Button fullWidth variant='contained'>
              Contained
            </Button>
            <Button fullWidth variant='text'>
              Text
            </Button>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{ overflowY: 'auto', textAlign: 'center', mb: 10 }}>
        <Peeps />
      </Box>
      <Container maxWidth='md' sx={{mb: 10 }}>
        <Typography variant='h2' gutterBottom>
          Partners & Clients
        </Typography>
        <Stack direction='row' spacing={2} justifySelf={'flex-start'} sx={{overflowX: 'auto', }}>
          <Logo1 width={240} height={48} />
          <Logo2 width={240} height={48} />
          <Logo3 width={240} height={48} />
          <Logo4 width={240} height={48} />
          <Logo5 width={240} height={48} />
          <Logo6 width={240} height={48} />
        </Stack>
        <FunctionsSection />
      </Container>
    </>
  );
};

export default HomePage;
