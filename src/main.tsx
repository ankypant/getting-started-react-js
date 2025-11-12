import './index.css';

import { ThemeProvider, createTheme } from '@mui/material';

import { AppRoutes } from './Router.tsx';
import { RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Create a custom theme for the application
const theme = createTheme({
  palette: {
    primary: {
      main: '#0b5994',
    },
    secondary: {
      main: '#444',
    },
    warning: {
      main: '#ff9800',
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={AppRoutes} />
    </ThemeProvider>
  </StrictMode>
);
