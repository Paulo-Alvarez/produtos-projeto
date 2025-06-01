const express = require('express');
const router = express.Router();

const produtoController = require('../controllers/produtoController');

// Listar todos os produtos
router.get('/', produtoController.getAllProdutos);

// Buscar produto por ID
router.get('/:id', produtoController.getProdutoById);

// Criar novo produto
router.post('/', produtoController.createProduto);

// Atualizar produto pelo ID
router.put('/:id', produtoController.updateProduto);

// Deletar produto pelo ID
router.delete('/:id', produtoController.deleteProduto);

module.exports = router;