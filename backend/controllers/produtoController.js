const supabase = require('../services/supabaseClient');

// Consultar todos os produtos
exports.getAllProdutos = async (req, res) => {
  try {
    const response = await supabase.get('/products?select=*');
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error.response?.data || error.message);
    res.status(500).json({ error: 'Erro ao buscar produtos', details: error.response?.data || error.message });
  }
};

// Consultar produto por ID
exports.getProdutoById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await supabase.get(`/products?id=eq.${id}`);
    if (response.data.length === 0) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.json(response.data[0]);
  } catch (error) {
    console.error('Erro ao buscar produto:', error.response?.data || error.message);
    res.status(500).json({ error: 'Erro ao buscar produto', details: error.response?.data || error.message });
  }
};

// Criar produto
exports.createProduto = async (req, res) => {
  try {
    const produto = req.body;
    const response = await supabase.post('/products', produto);
    res.status(201).json(response.data[0]);
  } catch (error) {
    console.error('Erro ao criar produto:', error.response?.data || error.message);
    res.status(500).json({ error: 'Erro ao criar produto', details: error.response?.data || error.message });
  }
};

// Atualizar produto
exports.updateProduto = async (req, res) => {
  try {
    const { id } = req.params;
    const produto = req.body;
    const response = await supabase.patch(`/products?id=eq.${id}`, produto);
    if (response.data.length === 0) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.json(response.data[0]);
  } catch (error) {
    console.error('Erro ao atualizar produto:', error.response?.data || error.message);
    res.status(500).json({ error: 'Erro ao atualizar produto', details: error.response?.data || error.message });
  }
};

// Deletar produto
exports.deleteProduto = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await supabase.delete(`/products?id=eq.${id}`);
    if (response.data.length === 0) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.json({ message: 'Produto deletado com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar produto:', error.response?.data || error.message);
    res.status(500).json({ error: 'Erro ao deletar produto', details: error.response?.data || error.message });
  }
};