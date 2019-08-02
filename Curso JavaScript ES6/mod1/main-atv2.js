//2º exercício
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' }, 
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' }, 
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
//2.1
const newMap = usuarios.map(usuario => usuario.idade);

// const newMap = usuarios.map(function(item) {
//     return item.idade;
// })
//2.2
const newFilter = usuarios
    .filter(usuario => usuario.empresa === 'Rocketseat' && usuario.idade > 18);

// const newFilter = usuarios.filter(function(item){
//     return item.empresa === 'Rocketseat' && item.idade > 18;
// })
//2.3
const newFind = usuarios.find(usuario => usuario.empresa === 'Google');

// const newFind = usuarios.find(function(item){
//     return item.empresa === 'Google';
// })
//2.4
const newMap2 = usuarios
    .map(usuario => ({...usuario, idade: usuario.idade * 2}))
    .filter(usuario => usuario.idade <= 50);

// const newMap2 = usuarios.map(function(item){
//     if (item.idade * 2 <= 50){
//         return item.idade * 2;
//     }
// })

console.log(newMap);
// console.log(newFilter);
console.log(newFind);
// console.log(newMap2);