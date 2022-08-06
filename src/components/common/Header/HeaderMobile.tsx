import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Stack } from '@mui/material';
import { ReactComponent as Logo } from 'assets/icons/Logo.svg';
import React from 'react';

interface HeaderMobileProps {}

const HeaderMobile: React.FC<HeaderMobileProps> = () => {
  return (
    <Box display={{ xs: 'block', sm: 'none' }}>
      <Stack
        component='header'
        p={1}
        direction='row'
        spacing={2}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Box>
          <Logo height={18} width={26} />
        </Box>
        <Button sx={{ minWidth: 0, padding: 0 }}>
          <MenuIcon />
        </Button>
      </Stack>
    </Box>
  );
};

export default HeaderMobile;
