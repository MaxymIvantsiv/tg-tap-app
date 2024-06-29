import {createTheme} from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#0C1615' },
    primary: {
      main: '#03DAB8',
    },
    text: {
      primary: '#fff',
      secondary: '#7B7B7B',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },
  components: {
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          minWidth: '60px',
        },
      },
    },
  },
});
