const express = require('express');
const estadoRouter = require('./routes/estado-route');
const cidadeRouter = require('./routes/cidade-route');

const app = express();

const PORT = 3333;


app.use(express.json());


app.get('/', (req, res) => {
    res.send(`It's working!`);
});


app.use('/estados', estadoRouter);
app.use('/cidades', cidadeRouter);


app.listen(PORT, () => {
    console.log(`Executando na porta ${PORT}`);
});