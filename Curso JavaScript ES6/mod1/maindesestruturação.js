const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio Grande do Sul',
        estado: 'SC',
    },
};

// console.log(usuario.nome, usuario.idade, usuario.endereco.cidade);

// const { nome, idade, endereco: { cidade } } = usuario;

// console.log(nome);
// console.log(idade);
// console.log(cidade);

function mostraNome({ nome, idade }){
    console.log(nome, idade);
}

mostraNome(usuario);