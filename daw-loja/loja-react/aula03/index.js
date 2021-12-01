const express = require('express');
const routes = require('./routes');

const app = express();

const PORT = 3000;

//middleware
app.use(express.json());
app.use(routes);

//Rota principal
app.get('/', (req, res) => {
    res.send(`it's working`);
})

app.listen(PORT, () => {
    console.log(`Executando porta ${PORT}`);
})