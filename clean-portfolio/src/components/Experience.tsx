import React from 'react';
import styled from '@emotion/styled';

const Section = styled.div`
  padding: 40px;
  color: white;
  text-align: center;
`;

const Experience = () => {
  return (
    <Section>
      <h2>Experience</h2>
      <p>
        <strong>Web Developer Intern | [Company Name] | [Dates]</strong><br />
        - Developed responsive web applications using React and TypeScript.<br />
        - Collaborated with a team to implement AI-driven features using TensorFlow.js.<br />
        - Optimized performance by 20% through code refactoring and lazy loading.
      </p>
      <p>
        <strong>Freelance Developer | [Dates]</strong><br />
        - Built a healthcare platform (LocalCareConnect) connecting caregivers with users.<br />
        - Integrated blockchain-verified credentials using Web3.js.
      </p>
    </Section>
  );
};

export default Experience;