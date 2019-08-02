//5º exercício
//5.1 rest
// const arr = [1, 2, 3, 4, 5, 6];

// const [ x, ...y ] = arr;

// console.log(x);
// console.log(y);


// function soma(...params){
//     return params.reduce((total, next) => total + next);
// }

// console.log(soma(1, 2, 3, 4, 5, 6));
// console.log(soma(1, 2));

//5.2 spread
const usuario1 = {  
    nome: 'Diego',  
    idade: 23,  
    endereco: {    
        cidade: 'Rio do Sul',    
        uf: 'SC',    
        pais: 'Brasil',  
    }
};

const usuario2 = { ...usuario1, nome: 'Gabriel' };
console.log(usuario2);

const usuario3 = { ...usuario1, endereco: { cidade: 'Lontras' }};
console.log(usuario3);