import React from 'react';
import { styled, IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginLeft: '10px',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.action.hover,
  '&:hover': {
    backgroundColor: theme.palette.action.selected,
    color: theme.palette.primary.main,
  },
  transition: 'background-color 0.3s ease, color 0.3s ease',
}));

interface ThemeToggleProps {
  toggleTheme: () => void;
  themeMode: 'dark' | 'light';
}

const ThemeToggle = ({ toggleTheme, themeMode }: ThemeToggleProps) => {
  return (
    <Tooltip title={themeMode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
      <StyledIconButton onClick={toggleTheme} aria-label="Toggle theme mode">
        {themeMode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </StyledIconButton>
    </Tooltip>
  );
};

export default ThemeToggle;