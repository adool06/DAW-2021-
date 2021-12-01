const express = require('express');
const app = express();

app.use(express.json());

//Rota principal
app.get('/', (req, res) => {
    res.send(`it's working`);
})

//Rota home
app.get('/home', (req, res) => {

    const nome = req.query.nome;

    res.send(`seja bem vindo ${nome}!`);
})

//Rota profile: request param
app.get('/profile/:username', (req, res) => {

    const username = req.params.username
    
    res.send(`vocÊ esta no perfil do  ${username}!`);
    })
    

//Rota login: request body
app.get('/login', (req, res) => {

    const user = req.body;
    const {passwor,username} = req.body;

    console.log(user)

    console.log('->', username);
    
    res.send(`vocÊ esta no perfil do  ${user.username}!`);
    })    

app.listen(3000, () => {
    console.log('runing on port 3000');
});
