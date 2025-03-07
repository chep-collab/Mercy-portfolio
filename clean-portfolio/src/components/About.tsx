import React from 'react';
import styled from '@emotion/styled';

const Section = styled.div`
  padding: 40px;
  color: white;
  text-align: center;
`;

const About = () => {
  return (
    <Section>
      <h2>About Me</h2>
      <p>
        Hi, I’m Mercy Chepngeno, a passionate web developer with expertise in React, TypeScript, and modern web technologies. I love building impactful projects that solve real-world problems, such as healthcare platforms, sustainable solutions, and educational tools. When I’m not coding, you can find me exploring new tech trends or contributing to open-source projects.
      </p>
      <p>
        <strong>Skills:</strong> React, TypeScript, Node.js, MongoDB, TensorFlow.js, Web3.js, GraphQL, AWS
      </p>
    </Section>
  );
};

export default About;