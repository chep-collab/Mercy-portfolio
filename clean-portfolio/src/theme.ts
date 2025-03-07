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
  },
  // Define breakpoints
  breakpoints: {
    values: {
      xs: 0,    // Extra small devices (e.g., phones)
      sm: 600,  // Small devices (e.g., tablets)
      md: 900,  // Medium devices (e.g., small laptops)
      lg: 1200, // Large devices (e.g., desktops)
      xl: 1536, // Extra large devices
    },
  },
};

// Create the theme
const theme = createTheme(themeOptions);

// Extend the theme with dynamic responsive styles
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
  MuiPaper: {
    styleOverrides: {
      root: ({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
          padding: '10px',
        },
      }),
    },
  },
  // Global styles for custom components (e.g., ProjectCard)
  MuiBox: {
    styleOverrides: {
      root: ({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
          padding: '10px',
          margin: '5px',
        },
      }),
    },
  },
};

export default theme;