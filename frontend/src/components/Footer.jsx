import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: #ffffff;
  padding: 10px 0;
  font-size: 16px;
font-weight: 500;
`;

const Footer = () => {
  return (
    <StyledFooter>Todos os direitos reservados.</StyledFooter>
  );
};

export default Footer;
