import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import theme from 'theme';
import { persistor, store } from 'store';
import { PersistGate } from 'redux-persist/integration/react';
import { MainRoutes } from 'routes';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { queryClient } from 'utils/queryClient';

function App() {
  const [queryClientState] = useState(() => queryClient);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <HelmetProvider>
            <ThemeProvider theme={theme}>
              <QueryClientProvider client={queryClientState}>
                <CssBaseline />
                <MainRoutes />
              </QueryClientProvider>
            </ThemeProvider>
          </HelmetProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
