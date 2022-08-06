import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
    },
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#EC008C',
      light: '#FC6767',
    },
  },
  typography: {
    subtitle1: {
      color: '#999999',
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md',
      },
    },
  },
});

export default theme;
