import React from 'react'; // Ensure React is imported
import { motion } from 'framer-motion';
import { styled } from '@mui/material';
import { projects } from '../data/projects';

const Section = styled('div')(({ theme }) => ({
  textAlign: 'center',
}));

const ProjectCard = styled('div')(({ theme }) => ({
  background: theme.palette.background.paper,
  padding: theme.spacing(2),
  borderRadius: '10px',
  margin: theme.spacing(1),
  maxWidth: '100%',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '300px',
  },
}));

const ProjectImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
  borderRadius: '5px',
  marginBottom: theme.spacing(1.5),
}));

const ProjectGrid = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
}));

const Projects = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Section>
        <h2>Projects</h2>
        <ProjectGrid>
          {projects.map((project) => (
            <motion.div key={project.id} whileHover={{ scale: 1.05 }}>
              <ProjectCard>
                <ProjectImage src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p><strong>Long Description:</strong> {project.longDescription}</p>
                <p><strong>Tech Stack:</strong> {project.technologies.join(', ')}</p>
                <p><strong>Key Features:</strong> {project.keyFeatures.join(', ')}</p>
                <p><strong>Role:</strong> {project.role}</p>
                <p><strong>Completion Date:</strong> {project.completionDate}</p>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#00bcd4', marginRight: '10px' }}>
                    View Code
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#00bcd4' }}>
                    Live Demo
                  </a>
                )}
              </ProjectCard>
            </motion.div>
          ))}
        </ProjectGrid>
      </Section>
    </motion.div>
  );
};

export default Projects;