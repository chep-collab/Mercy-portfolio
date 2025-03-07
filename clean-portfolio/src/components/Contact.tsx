import React from 'react';
import styled from '@emotion/styled';

const Section = styled.div`
  padding: 40px;
  color: white;
  text-align: center;
`;

const Contact = () => {
  return (
    <Section>
      <h2>Contact Me</h2>
      <p>Email: mercy.chepngeno@example.com</p>
      <p>
        <a href="https://www.linkedin.com/in/mercy-chepngeno-48b72920a/" target="_blank" rel="noopener noreferrer" style={{ color: '#00bcd4' }}>LinkedIn</a> | 
        <a href="https://github.com/chep-collab" target="_blank" rel="noopener noreferrer" style={{ color: '#00bcd4', marginLeft: '10px' }}>GitHub</a>
      </p>
      {/* Optional: Add a contact form later */}
    </Section>
  );
};

export default Contact;