import React from 'react'; // Add this import
import { AppBar, Box, Button, Container, Toolbar, Typography, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  themeMode: 'dark' | 'light';
  toggleTheme: () => void;
}

const Header = ({ themeMode, toggleTheme }: HeaderProps) => {
  const navItems = ['About', 'Projects', 'Experience', 'Contact'];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null); // Line 16: Now React is defined
  const navigate = useNavigate();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavItemClick = (item: string) => {
    navigate(`/${item.toLowerCase()}`);
    handleMenuClose();
  };

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: 'blur(20px)',
        background: themeMode === 'dark' ? 'rgba(10, 25, 41, 0.8)' : 'rgba(240, 240, 240, 0.8)',
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{ mr: 2, fontWeight: 700, color: 'primary.main', textDecoration: 'none', '&:hover': { color: 'primary.dark' } }}
            aria-label="Home"
          >
            Mercy Chepngeno
          </Typography>

          {isMobile ? (
            <>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                  sx: {
                    background: themeMode === 'dark' ? '#0a1929' : '#f0f0f0',
                    color: themeMode === 'dark' ? 'white' : 'black',
                  },
                }}
              >
                {navItems.map((item) => (
                  <MenuItem key={item} onClick={() => handleNavItemClick(item)} sx={{ '&:hover': { color: 'primary.main' } }}>
                    {item}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    component={RouterLink}
                    to={`/${item.toLowerCase()}`}
                    sx={{ color: 'text.primary' }}
                    aria-label={`Navigate to ${item}`}
                  >
                    {item}
                  </Button>
                </motion.div>
              ))}
            </Box>
          )}

          <Button
            variant="contained"
            color="primary"
            component="a"
            href="/Document 41.pdf"
            download="Mercy_Chepngeno_CV.pdf"
            sx={{ ml: 2 }}
            aria-label="Download CV"
          >
            Download CV
          </Button>
          <ThemeToggle toggleTheme={toggleTheme} themeMode={themeMode} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
