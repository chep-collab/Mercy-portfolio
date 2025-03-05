import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'local-care-connect',
    title: 'LocalCareConnect',
    description: 'A modern healthcare platform connecting caregivers with patients',
    longDescription: `LocalCareConnect is a comprehensive healthcare platform built with Next.js 13 and Material-UI. 
    It features real-time chat, appointment management, service booking, and an interactive dashboard for both caregivers and patients. 
    The platform includes features like achievement badges, real-time notifications, and detailed analytics.`,
    image: '/projects/local-care-connect.png',
    technologies: [
      'Next.js 13',
      'TypeScript',
      'Material-UI',
      'Framer Motion',
      'NextAuth.js',
      'date-fns'
    ],
    githubUrl: 'https://github.com/chep-collab/local-care-connect',
    liveUrl: 'https://local-care-connect.vercel.app',
    category: 'web',
    featured: true,
    completionDate: '2025-03',
    role: 'Full Stack Developer',
    keyFeatures: [
      'Real-time chat system',
      'Appointment management',
      'Interactive dashboard',
      'Achievement system',
      'Service booking',
      'Review system',
      'Real-time notifications'
    ]
  }
];
