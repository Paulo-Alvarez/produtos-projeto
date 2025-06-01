require('dotenv').config();
const express = require('express');
const cors = require('cors');

const produtoRoutes = require('./routes/produtoRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Rotas da API para produtos
app.use('/produtos', produtoRoutes);

// Rota raiz só para teste
app.get('/', (req, res) => {
  res.send('API de Produtos rodando');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});