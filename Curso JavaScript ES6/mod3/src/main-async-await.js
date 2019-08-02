const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Ok') }, 2000);
})

// minhaPromise().then(response => {
//     console.log(response);
// })
// .catch( err => {

// })

// async function executaPromise(){
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());

//     // minhaPromise().then(response => {
//     //     console.log(response);

//     //     minhaPromise().then (response => {
//     //         console.log(response);

//     //         minhaPromise().then (response => {
//     //             console.log(response);
//     //         })
//     //     })
//     // })
//     // const response = await minhaPromise();

//     // console.log(response);
// }

// executaPromise();

const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log('Arrow function.');
}

executaPromise();