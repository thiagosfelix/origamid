var pessoa = {
    nome: 'Thiago',
    sobrenome: 'Felix',
    idade: 26,
    profissao: 'Servidor Público',
    cursoSuperior: false,
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
};

console.log(pessoa.nomeCompleto());