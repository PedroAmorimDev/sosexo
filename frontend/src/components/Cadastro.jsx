// src/components/Cadastro.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';


const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState('pendente');
  const [imagem, setImagem] = useState(null);
  const [message, setMessage] = useState('');


  const TitleOverlay = styled.h2`
  font-size: 40px;
  font-weight: 600;
  color: #fff;
  padding: 50px 0 0 0;
  text-shadow: 2px 2px 4px rgba(128, 29, 112, 0.5);
`;

  const handleFileChange = (event) => {
    setImagem(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Validação dos campos
    if (!nome.trim() || !descricao.trim()) {
      setMessage('Por favor, preencha todos os campos obrigatórios.');
      return; // Interrompe a execução se os campos estiverem vazios
    }
  
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('descricao', descricao);
    formData.append('status', status);
    if (imagem) formData.append('imagem', imagem);
  
    try {
      const response = await axios.post('http://localhost:3333/api/eventos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('Evento cadastrado com sucesso!');
      setNome('');
      setDescricao('');
      setStatus('pendente');
      setImagem(null);
    } catch (error) {
      console.error('Erro ao cadastrar evento:', error.response || error);
      setMessage('Erro ao cadastrar evento');
    }
  };

  return (<div id='container'>
    <div id='banner'>
      <div className='banner'>
        <TitleOverlay>
        Cadastre o seu evento <img src="https://pedroamorimdev.github.io/ubernews/forma.png" className='icon' alt="" /> 
      </TitleOverlay>
      </div>
    </div>
    <div id='cadastro'>
      <Form id='campos' onSubmit={handleSubmit}>
        <Form.Group controlId="nome">
          <Form.Label>Nome do Evento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome do evento"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="descricao">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            type="text"
            placeholder="Descrição do evento"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="status">
          <Form.Label>Status</Form.Label>
          <Form.Control
            as="select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="pendente">Pendente</option>
            <option value="ocorreu">Ocorreu</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="imagem">
          <Form.Label>Imagem</Form.Label>
          <Form.Control
            type="file"
            onChange={handleFileChange}
            accept="image/*"
          />
        </Form.Group>
        <Button id='button' variant="primary" type="submit">
          Cadastrar Evento
        </Button>

        {message && <p>{message}</p>}
      </Form>
    </div>
  </div>
  );
};

export default Cadastro;
