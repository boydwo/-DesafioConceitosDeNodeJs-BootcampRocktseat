const express = require('express');
const server = express();
server.use(express.json());
const vetProjetos = [];


server.post('/projects', (req, res) => {
  const { id } = req.body;
  const { title } = req.body;

  const projetos = {
    id,
    title,
    tasks: []
  };

  vetProjetos.push(projetos);
  return res.json(projetos);
})