const express = require('express');
const routes = express.Router();

//dados
const produtos = [
    {id:1, nome: 'suco de laranja', litros:0.5, preco:3},
    {id:1, nome: 'suco de uva', litros:1, preco:35},
    {id:1, nome: 'suco de abacaxi', litros:0.5, preco:3}
]

routes.get('/produtos', (req, res) =>{
    res.send(produtos)
})

routes.get('/produtos/:id', (req, res) =>{
    const id = req.params.id;
    const index = id - 1;

    res.send(produtos[index])
})

routes.post('/produtos', (req, res) =>{
    const produto = req.body


    //adicionar o produto recebido por parametro no vetor produtos
    produtos.push(produto);

    res.send(produto)
})

module.exports = routes;