import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  const navItems = ['About', 'Projects', 'Experience', 'Contact'];

  return (
    <AppBar position="sticky" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(20px)' }}>
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
            }}
          >
            Mercy chepngeno
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
            href="/Mercy-chepngeno-CV.pdf"
            target="_blank"
            sx={{ ml: 2 }}
          >
            Download CV
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
