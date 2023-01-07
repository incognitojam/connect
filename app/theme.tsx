'use client';

import createTheme from '@mui/material/styles/createTheme';
import { Inter } from '@next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#51ff00',
    },
    background: {
      default: '#202020',
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2287ce',
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});
