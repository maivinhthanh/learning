import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Stack } from '@mui/material';
import { ReactComponent as Logo } from 'assets/icons/Logo.svg';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import theme from 'theme';
import { ROUTES } from './routes';

interface HeaderDesktopProps {}

const HeaderDesktop: React.FC<HeaderDesktopProps> = () => {
  let location = useLocation();
  console.log(location);
  return (
    <Box display={{ xs: 'none', sm: 'block' }}>
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
          {ROUTES.map((route) => {
            return (
              <Button
                key={route.path}
                variant={location.pathname === route.path ? 'contained' : 'text'}
                sx={{
                  minWidth: 110,
                  '> a': {
                    textDecoration: 'none',
                    color: location.pathname === route.path ? 'black' : 'white',
                  },
                }}
              >
                <Link to={route.path}>{route.label}</Link>
              </Button>
            );
          })}
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
