import React from 'react';
import { theme } from './configuration/theme';
import { Home } from './pages/home';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';

function App(): any {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
