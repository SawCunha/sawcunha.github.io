import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#041F31',
      light: '#80dbd9',
      dark: '#002884',
      contrastText: '#80dbd9'
    },
    secondary: {
      main: '#80dbd9'
    },
    text: {
      primary: '#80dbd9',
      secondary: '#D7E5EC'
    }
  },
  typography: {
    allVariants: {
      fontFamily: 'Tinos'
    }
  }
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main
    }
  }
});

export { theme };
