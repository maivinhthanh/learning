import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Stack } from '@mui/material';
import { ReactComponent as Logo } from 'assets/icons/Logo.svg';
import React from 'react';

interface HeaderDesktopProps {}

const HeaderDesktop: React.FC<HeaderDesktopProps> = () => {
  return (
    <Box display={{xs: 'none', sm: 'block'}}>
      <Stack
        component='header'
        p={4}
        direction='row'
        spacing={2}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Box>
          <Logo height={18} />
        </Box>
        <Stack direction='row'>
          <Button variant='text'>Home</Button>
          <Button variant='text'>About Us</Button>
          <Button variant='text'>Blog</Button>
          <Button variant='text'>Contact</Button>
        </Stack>
        <Box>
          <Button>
            <MenuIcon />
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default HeaderDesktop;
