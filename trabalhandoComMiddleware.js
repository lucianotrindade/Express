function saudacao(nome) {
    return function (req, res, next) {
        console.log(`Meu nome: ${nome}`);
        next();
    }
}

module.exports = saudacao;