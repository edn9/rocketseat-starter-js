const soma = (a = 3, b = 6) => a + b;

/* function soma(a = 3, b = 6){ //sem a = 3, valor padrão, retorna NaN
    return a + b;
} */

console.log(soma(1));
console.log(soma());