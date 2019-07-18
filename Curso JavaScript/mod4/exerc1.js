/* function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} */

function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            return idade >= 18 ? resolve() : reject();
        }, 2000);
    });
}

// if (idade >= 18) {
//     resolve('ok')
// } else if (idade < 18) {
//     reject('nope');
// }

checaIdade(18)
    .then(async function (response) {
        // await sleep(2000);
        console.log("Maior que 18.");
    })
    .catch(async function (error) {
        // await sleep(2000);
        console.log("Menor que 18.");
    });