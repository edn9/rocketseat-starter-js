//SPREAD - Propagar, repassar informações de um obj. ou array para outra estrutura de dados

const usuario1 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat',
};

const usuario2 = { ...usuario1, nome: 'Gabriel' };

console.log(usuario2);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2 ];

console.log(arr3);

//REST

/* function soma(...params){
    return params.reduce((total, next) => total + next); //fazer essa soma com reduce
}

console.log(soma(1, 3, 4)); */

/* function soma(a, b, c){
    return a + b + c;
}

console.log(soma(1, 3, 4)); //caso precisar por outro parametro, adicionar novamente...
 */
/* const arr = [1, 2, 3, 4];

const [ a, b, ...c ] = arr;

console.log(a);
console.log(b);
console.log(c);

const usuario = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto); */