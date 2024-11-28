import React from 'react';
import styled from 'styled-components';

const CarreiraContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin:50px auto;
background-color: white;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
line-height: 50px;


`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 15px;
  text-align: justify;
`;
const Span = styled.span`
background-color: #9370db;
padding: 10px;
border-radius: 40px;
color: white;

`;
const Span2 = styled.span`
background-color: #dc368ee0;
padding: 10px;
border-radius: 40px;
color: white;

`;
const Span3 = styled.span`
background-image: url('https://pedroamorimdev.github.io/ubernews/fundo.png');
padding: 10px;
border-radius: 40px;
color: white;

`;

function Carreira() {
  return (<div className='fundocarreira'>
    
      <CarreiraContainer>
        <Title>Equipe <Span2>DevFive</Span2> de <Span>desenvolvimento</Span><br /> de <Span3>aplicações web</Span3></Title>
        <Paragraph>
        Somos uma equipe de desenvolvedores comprometidos em criar soluções inovadoras e eficientes no universo do desenvolvimento web. Nosso trabalho é pautado pela aplicação prática de conhecimentos avançados, sempre focados em oferecer resultados relevantes e funcionais para nossos clientes e parceiros.</Paragraph>
        <Paragraph>
        Combinamos experiência, criatividade e trabalho em equipe para desenvolver projetos que conectam pessoas, simplificam processos e geram impacto. Nosso objetivo é entregar soluções que não apenas atendam, mas superem expectativas, demonstrando nossa dedicação à qualidade e à inovação tecnológica.
        </Paragraph>
        <Paragraph>
        Estamos prontos para transformar ideias em realidade, contribuindo com nossa expertise para o sucesso de cada projeto. </Paragraph>
      </CarreiraContainer>
  </div>
  );
}

export default Carreira;