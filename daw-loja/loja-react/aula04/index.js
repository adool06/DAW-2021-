const express = require('express');
const produtoRouter = require('./routes/produto-router');

const routes = require('./routes');

const app = express();

const PORT = 3000;

//middleware
app.use(express.json());
app.use(produtoRouter);

//Rota principal
app.get('/', (req, res) => {
    res.send(`it's working`);
})

app.listen(PORT, () => {
    console.log(`Executando porta ${PORT}`);
})