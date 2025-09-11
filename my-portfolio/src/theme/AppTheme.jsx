// AppTheme.jsx
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { getTheme } from './theme/theme';

export const AppTheme = ({ children, mode = "light" }) => (
  <ThemeProvider theme={getTheme(mode)}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);