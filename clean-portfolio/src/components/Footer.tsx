import React from 'react';
import styled from '@emotion/styled';

const FooterStyled = styled.footer`
  padding: 20px;
  text-align: center;
  color: white;
  background: #1a1a2e;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterStyled>
      <p>© 2025 Mercy Chepngeno</p>
      <p>
        <a href="https://linkedin.com/in/mercy-chepngeno" target="_blank" rel="noopener noreferrer" style={{ color: '#00bcd4', margin: '0 10px' }}>LinkedIn</a>
        <a href="https://github.com/chep-collab" target="_blank" rel="noopener noreferrer" style={{ color: '#00bcd4', margin: '0 10px' }}>GitHub</a>
      </p>
    </FooterStyled>
  );
};

export default Footer;