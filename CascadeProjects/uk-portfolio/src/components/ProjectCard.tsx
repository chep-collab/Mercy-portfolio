import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '../types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.projectCard}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      
      <div className={styles.techStack}>
        {project.technologies.map((tech) => (
          <span key={tech} className={styles.techBadge}>
            {tech}
          </span>
        ))}
      </div>
      
      <div className={styles.links}>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            title="View source on GitHub"
          >
            <FaGithub size={24} />
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            title="View live project"
          >
            <FaExternalLinkAlt size={20} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
