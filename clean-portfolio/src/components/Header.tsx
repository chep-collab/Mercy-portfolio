import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  themeMode: 'dark' | 'light';
  toggleTheme: () => void;
}

const Header = ({ themeMode, toggleTheme }: HeaderProps) => {
  const navItems = ['About', 'Projects', 'Experience', 'Contact'];

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
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              mr: 4,
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
              '&:hover': {
                color: 'primary.dark',
              },
            }}
            aria-label="Home"
          >
            Mercy Chepngeno
          </Typography>

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
