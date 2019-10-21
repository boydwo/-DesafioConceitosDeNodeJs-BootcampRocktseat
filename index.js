const express = require('express');
const server = express();
server.use(express.json());
const vetProjetos = [];

// adiciona
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

// lista


// edita



//deleta



server.listen(3000);
