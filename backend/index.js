require('dotenv').config();
const express = require('express');
const cors = require('cors');

const produtoRoutes = require('./routes/produtoRoutes');

const app = express();

// Configuração CORS: libera só o domínio do front-end (ajuste para o seu URL real)
app.use(cors({
  origin: 'http://meusite-produtos.s3-website-us-east-1.amazonaws.com'
}));

app.use(express.json());

// Rotas da API para produtos
app.use('/produtos', produtoRoutes);

// Rota raiz só para teste
app.get('/', (req, res) => {
  res.send('API de Produtos rodando');
});

const PORT = process.env.PORT || 3000;

// Escuta em 0.0.0.0 para aceitar conexões externas
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});