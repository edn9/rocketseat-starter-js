const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item, index){
    return item + index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next){
    return total + next;

});

console.log(sum);

const filter = arr.filter(function(item){
    return item % 2 === 0; //true or false, comparação com ===
});

console.log(filter); //imprimir apenas os partes com mod. diferencial da divisão

const find = arr.find(function(item){
    return item === 3;
});

console.log(find);

// 0 1, depois 1 3, depois 4 e 4, depois 8 5 e assim por diante

// const arr = [1, 3, 4, 5, 8, 9];

// const newArr = arr.map(function(item){
//     return item * 2;
// });

// console.log(newArr);