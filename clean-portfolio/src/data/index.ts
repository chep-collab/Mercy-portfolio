import { Experience, Project, Skill } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'LocalCareConnect',
    description: 'An innovative healthcare platform connecting verified local caregivers with those in need. Features real-time availability mapping, AI-powered matching, and blockchain-verified credentials. Reduced caregiver search time by 60% in pilot communities.',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'TensorFlow.js', 'Web3.js', 'Socket.io'],
    imageUrl: '/projects/localcareconnect.png',
    githubUrl: 'https://github.com/yourusername/local-care-connect',
    liveUrl: 'https://localcareconnect.demo.com'
  },
  {
    id: 2,
    title: 'EcoSwapHub',
    description: 'Revolutionary sustainable item exchange platform with carbon footprint tracking. Helped communities reduce waste by 40% and save over 1000 tons of CO2 emissions through local item exchanges and sharing.',
    technologies: ['React', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Redis', 'AWS Lambda', 'MapBox'],
    imageUrl: '/projects/ecoswaphub.png',
    githubUrl: 'https://github.com/yourusername/eco-swap-hub',
    liveUrl: 'https://ecoswaphub.demo.com'
  },
  {
    id: 3,
    title: 'NeuroLearn',
    description: 'Adaptive learning platform for neurodivergent individuals. Uses AI to detect learning patterns and dynamically adjusts content presentation. Improved learning outcomes by 45% in initial studies.',
    technologies: ['React', 'TypeScript', 'Python', 'TensorFlow', 'WebGL', 'Three.js', 'Firebase'],
    imageUrl: '/projects/neurolearn.png',
    githubUrl: 'https://github.com/yourusername/neuro-learn'
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Tech Solutions Ltd',
    position: 'Senior Frontend Developer',
    period: '2022 - Present',
    description: 'Led development of innovative healthcare and education platforms. Implemented AI-driven interfaces and improved application performance by 40%. Mentored junior developers and established best practices.',
    technologies: ['React', 'TypeScript', 'Node.js', 'TensorFlow.js', 'WebGL']
  },
  {
    id: 2,
    company: 'Digital Innovations UK',
    position: 'Frontend Developer',
    period: '2020 - 2022',
    description: 'Developed sustainable technology solutions and accessibility-focused applications. Specialized in performance optimization and Web3 integration.',
    technologies: ['React', 'TypeScript', 'GraphQL', 'Web3.js', 'Three.js']
  }
];

export const skills: Skill[] = [
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 85, category: 'frontend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'GraphQL', level: 80, category: 'backend' },
  { name: 'TensorFlow.js', level: 75, category: 'frontend' },
  { name: 'Web3.js', level: 70, category: 'frontend' },
  { name: 'WebGL/Three.js', level: 75, category: 'frontend' },
  { name: 'AWS', level: 70, category: 'tools' },
  { name: 'Docker', level: 80, category: 'tools' },
  { name: 'CI/CD', level: 85, category: 'tools' },
  { name: 'System Design', level: 85, category: 'tools' }
];
