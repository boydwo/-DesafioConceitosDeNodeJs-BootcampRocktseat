const express = require('express');
const server = express();
server.use(express.json());
const vetProjetos = [];

// adiciona 
server.post('/projects/', (req, res) => {
  const { id } = req.body;
  const { title } = req.body;

  const projetos = {
    id,
    title,
    tasks: []
  };

  vetProjetos.push(projetos);
  return res.json(projetos);
});

// lista vetor
server.get('/projects/', (req, res) => {
  return res.json(vetProjetos);
});

// edita alterando o titulo
server.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const recebeArray = vetProjetos.find(item => item.id === id); // pegando elemento com id igual ao passado no parametro

  recebeArray.title = title;

  return res.json(recebeArray);
})


//deleta



server.listen(3000);
