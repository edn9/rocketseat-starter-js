const arr = [1, 3, 4, 5, 6];

const newArr = arr.map(item => item * 2);

// const newArr = arr.map(function(item) {
//     return item * 2;
// });

console.log(newArr);

const test0 = () => {
    return 'teste';
}

const test1 = () => [1, 2, 3];
const test2 = () => 'teste';
const test3 = () => 3;
// const test4 = () => { nome: 'Diego' };

const test4 = () => { 
    return {nome: 'Diego' }
};

const test5 = () => ({ nome: 'Diego' });

console.log(test5());