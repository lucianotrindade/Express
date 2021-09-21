//Função para importar o modulo Express que foi instalado dentro do node
//Usando a versão do express: ^4.17.1
const express = require('express');
const app = express();

const saudacao = require('./trabalhandoComMiddleware');

app.use(saudacao('Luciano'));

//Depois da requisição retornamos um Json 
app.use('/home', (req, res, next) => {
    res.json({
        nome: 'Ana Luiza',
        idade: 39,
        sexo: "F"
    });
//Next serve para chamar a proxima função.
    next();
});

//Iniciando um servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor online!');
});

//Vamos instalar com dependencia o NODEMON para ficar monitorando os arquivos e atualizando nosso servidor. 