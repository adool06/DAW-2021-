const produtos = [
    {id:1, nome: 'suco de laranja', litros:0.5, preco:3},
    {id:1, nome: 'suco de uva', litros:1, preco:35},
    {id:1, nome: 'suco de abacaxi', litros:0.5, preco:3}
];

module.exports = {


    indez: (req, res) => {
        return res.json(produtos);
    },

    show: (req, res) =>{
        const id = req.params.id;
        const index = id - 1;
    
        res.send(produtos[index]);
    },
    create: (req, res) =>{
        const produto = req.body
    
    
        //adicionar o produto recebido por parametro no vetor produtos
        produtos.push(produto);
    
        res.send(produto)
    }
}