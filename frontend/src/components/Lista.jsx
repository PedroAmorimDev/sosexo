import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url('https://pedroamorimdev.github.io/ubernews/fundo1.png') no-repeat center/cover;
  height: 180px;
  justify-content: center;
  width: 100%;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
  text-align: left;
  position: relative;
  padding: 20px;
`;

const TitleOverlay = styled.h2`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(128, 29, 112, 0.5);
  position: absolute;
  bottom: 10px;
  left: 15px;
  
`;


const Divider = styled.hr`
  border: 1px solid #000;
  margin: 20px 0;
`;


const EventContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
  margin: 0 50px;
`;

const EventImage = styled.img`
  width: 170px;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 15px;
`;

const EventImagePlaceholder = styled.div`
  width: 120px;
  height: 120px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-right: 15px;
  padding: 5px;
`;

const EventDetails = styled.div`
  margin-left: 15px;
  flex-grow: 1;
`;

const EventTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const SemEvento = styled.h3`
  font-size: 25px;
  font-weight: 600;
  
  text-align: center;
  margin-top: 50px;
`;

const EventDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 0;
`;
const EventDescription2 = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #863f84;
  margin-bottom: 0;
`;

const Lista = () => {

  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const response = await axios.get('http://localhost:3333/api/eventos');
        setEventos(response.data);
      } catch (error) {
        console.error('Erro ao listar eventos:', error);
      }
    };

    fetchEventos();
  }, []);
  return (
    <div>
      <HeaderSection>
        <TitleOverlay>Seminários</TitleOverlay>
      </HeaderSection>
      <div>
        {eventos.length > 0 ? (
          eventos.map((evento) => (
            <EventContainer key={evento.id}>
              
              {evento.imagem ? (
                <EventImage
                  src={`http://localhost:3333/uploads/${evento.imagem}`}
                  alt={evento.nome}
                />
              ) : (
                <EventImagePlaceholder>
                  <span>Sem imagem</span>
                </EventImagePlaceholder>
              )}

              <EventDetails>
                <EventTitle>{evento.nome}</EventTitle>
                <EventDescription>{evento.descricao}</EventDescription>
                <EventDescription2>{evento.status}</EventDescription2>
              </EventDetails>
            </EventContainer>
          ))
        ) : (
          <SemEvento>Nenhum evento disponível 😐</SemEvento>
        )}
      </div>
    </div>
  );
};

export default Lista;