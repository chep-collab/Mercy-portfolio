// src/theme.ts
import { createTheme, ThemeOptions } from '@mui/material/styles';

// Define the base theme options without self-referencing
const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bcd4',
    },
    background: {
      default: '#0a1929',
      paper: '#132f4c',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    // Placeholder for components (styles will be added dynamically)
  },
  // Define breakpoints
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
};

// Create the theme and then extend it with dynamic styles
const theme = createTheme(themeOptions);

// Extend the theme with breakpoint-specific styles
theme.components = {
  ...theme.components,
  MuiContainer: {
    styleOverrides: {
      root: ({ theme }) => ({
        paddingLeft: '16px',
        paddingRight: '16px',
        [theme.breakpoints.down('sm')]: {
          paddingLeft: '8px',
          paddingRight: '8px',
        },
      }),
    },
  },
  MuiTypography: {
    styleOverrides: {
      root: ({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
          fontSize: '0.9rem',
        },
      }),
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: ({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
          padding: '8px 0',
        },
      }),
    },
  },
};

export default theme;