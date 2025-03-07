import { Container, Grid } from '@mui/material';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';

const Home = () => {
  return (
    <>
      <Hero />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={4}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
