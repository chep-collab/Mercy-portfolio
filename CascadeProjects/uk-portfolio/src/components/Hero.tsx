import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          height: '90vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Senior Frontend Developer
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: '600px', mb: 4 }}
          >
            Crafting exceptional digital experiences with React and TypeScript.
            Specializing in building enterprise-scale applications for UK companies.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Typography variant="body1" color="primary" sx={{ fontWeight: 500 }}>
            2 years of experience • React Expert • TypeScript Enthusiast
          </Typography>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Hero;
