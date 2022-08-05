import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from 'theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <App />
  </ThemeProvider>
  );
}

export default App;
