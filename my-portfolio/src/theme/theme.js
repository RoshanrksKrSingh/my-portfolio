import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode, // 'light' or 'dark'
      primary: { main: '#3ae8cb' },
      secondary: { main: '#efd9d9' },
      error: { main: red.A400 },
      ...(mode === 'dark' && {
        background: {
          default: '#000000', // fully black background
          paper: '#121212',    // slightly lighter for cards/paper
        },
        text: {
          primary: '#000000',  // make text white
          secondary: '#000000', 
        },
      }),
    },
  });