import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   font-family: "Poppins", sans-serif;
  width: 100%;
  padding: 15px;
`;

const PhotoSection = styled.section`
  display: flex;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background: url('https://pedroamorimdev.github.io/ubernews/fundo1.png') no-repeat center/cover; 
  height: 420px;  
  margin: 15px auto;
  position: relative;
  background-color: blue;
  box-shadow: 0 4px 8px rgba(4, 5, 6, 0.7);
  width: 96%;
`;

const Description = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-weight: 600;
  color: white;
  font-size: 30px;
`;

const LogoOverlay = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 70px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  line-height: 1;
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px;
`;

const Home = () => {
  return (
    <Container>
      <PhotoSection>
        <Description>Utilize nosso veículo de informação.</Description>
        <LogoOverlay>
          <span>UBER</span>
          <span>NEWS.</span>
        </LogoOverlay>
      </PhotoSection>
    </Container>
  );
};

export default Home;