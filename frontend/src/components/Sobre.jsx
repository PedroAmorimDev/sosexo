import React from 'react'
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// Animação de flutuação
const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

// Estilizando a bolha
const Bubble = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  animation: ${float} 3s ease-in-out infinite;
  position: relative;
  max-width: 500px;
  margin: 20px;
`;
const Bubble2 = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  animation: ${float} 3s ease-in-out infinite;
  position: relative;
  max-width: 500px;
  margin: 20px;
  max-height: 800px;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;

const Text = styled.p`
  font-size: 16px;
  color: #333;
  text-align: center;
`;
const Volte = styled.button`
  font-size: 20px;
  background-color: #000000;
  color: #ffffff;
  text-align: center;
  border: 0;
  padding: 10px;
  border-radius: 30px;
  font-weight: 600;
  border: #ffffff 3px solid;

  width: 140px;
  &:hover{
    background-color: #ffffff;
    border: #000000 3px solid;
    color: #000000;
  }
`;
const Title = styled.h1`
color: #000000;
text-align: center;
font-weight: 600;
margin: 25px  0;
font-size: 30px;
`;
const Title2 = styled.h1`
color: #000000;
text-align: center;
font-weight: 600;
margin: 15px;
font-size: 30px;
`;

const moveLeftRight = keyframes`
  0% { transform: translateX(-50px) rotate(0deg); }    /* Começa o movimento de volta */
  50% { transform: translateX(100px) rotate(360deg); } /* Gira enquanto vai para a direita */
  90% { transform: translateX(0) rotate(360deg); }    /* Chega no final da ida */
  100% { transform: translateX(-50px) rotate(360deg); }   /* Retorna em linha reta */
`;

const Section = styled.section`
  margin: 20px 0;
  padding: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  `;

const MovingImage = styled.img`
  width: 70px; /* Ajuste o tamanho da imagem conforme necessário */
  height: auto; /* Mantém a proporção da imagem */
  animation: ${moveLeftRight} 2s ease-in-out infinite; /* Animação de movimento */
`;

const FloatingBubble = ({ text, text2, text3, text4, imageUrl, title }) => {
  return (
    <Bubble>
      {imageUrl && <Image src={imageUrl} alt="Bubble Image" />}
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Text>{text2}</Text>
      <Text>{text3}</Text>
      <Text>{text4}</Text>
      <div className='caixap'>
        <div className='seta'>
          <Link to="/">
            <MovingImage className='imgseta' src="./s1.png" />
          </Link>
        </div>
        <div className='volte'>
          <Link to="/ubernews">
            <Volte>Voltar tudo</Volte>
          </Link>
        </div>
      </div>

    </Bubble>
  );
};

const FloatingBubble2 = ({ text, text2, imageUrl, title }) => {
  return (
    <Bubble2>
      {imageUrl && <Image src={imageUrl} alt="Bubble Image" />}
      <Title2>{title}</Title2>
      <Text>{text}</Text>
      <Text>{text2}</Text>
    </Bubble2>
  );
};


function Sobre() {
  const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

  return (

    <Container>
      <div className='about'>
        <FloatingBubble
          title='Tecnologias utilizadas'
          text2='
          React.js foi utilizado para o desenvolvimento da interface do usuário devido à sua capacidade de criar componentes reutilizáveis e interativos. Isso simplifica a manutenção e evolução do código, além de garantir uma experiência fluida para o usuário com a renderização eficiente do DOM Virtual. '
          text3='Axios foi a biblioteca escolhida para realizar requisições HTTP entre o frontend e o backend. Ele é simples de usar, suporta promessas e fornece interceptores que permitem a manipulação de requisições e respostas de maneira centralizada.'
          text4=''
          text="Node.js

          O Node.js foi escolhido para o backend por sua alta performance e escalabilidade. Ele permite a construção de APIs rápidas e eficientes, sendo ideal para lidar com operações assíncronas e grande volume de requisições. Além disso, sua ampla comunidade oferece suporte e bibliotecas robustas. "



          imageUrl="https://img.freepik.com/free-photo/gradient-3d-fluid-background_23-2150499061.jpg"
        />

        <div className='about2'>

          <FloatingBubble2
            text="acessoriadevfive@devfive.com"
            text2="+07 (67) 3288-2359"
            title='Contato'
            imageUrl="https://pedroamorimdev.github.io/ubernews/fundo.png"
          />
          <FloatingBubble2
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            title='Comprometimento'
            imageUrl="https://community.hpe.com/t5/image/serverpage/image-id/137212i23DDCBDCA673FB9B/image-dimensions/2500?v=v2&px=-1"
          />
        </div>
      </div>
      <Section>
        <Title>Componentes Atraentes</Title>
        <Text>Nossas plataformas utilizam design moderno e animações para uma experiência envolvente.</Text>
      </Section>

    </Container>
  );
};


export default Sobre
