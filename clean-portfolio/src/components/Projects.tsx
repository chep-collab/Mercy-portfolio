import React from 'react';
import { motion } from 'framer-motion';
import { styled } from '@mui/material';
import { projects } from '../data/projects';

const Section = styled('div')(({ theme }) => ({
  textAlign: 'center', // Remove padding here, handled by theme
}));

const ProjectCard = styled('div')(({ theme }) => ({
  background: theme.palette.background.paper,
  padding: '20px',
  borderRadius: '10px',
  margin: '10px',
  maxWidth: '100%', // Full width, theme handles breakpoints
}));

const ProjectImage = styled('img')({
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
  borderRadius: '5px',
  marginBottom: '15px',
});

const Projects = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Section>
        <h2>Projects</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
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
        </div>
      </Section>
    </motion.div>
  );
};

export default Projects;