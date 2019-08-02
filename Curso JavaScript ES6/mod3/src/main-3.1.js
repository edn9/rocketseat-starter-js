//3.1
// Função delay aciona o .then após 1s
var a = 1;
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// function umPorSegundo() {  
//     delay().then(() => {    
//         console.log('1s');    
//         delay().then(() => {      
//             console.log('2s');      
//             delay().then(() => {        
//                 console.log('3s');      
//             });    
//         })  
//     });
// }

async function umPorSegundo(){
    await delay();
    console.log(`${a} segundo(s).`);
    a++;
    await delay();
    console.log(`${a} segundo(s).`);
    a++;
    await delay();
    console.log(`${a} segundo(s).`);
}

umPorSegundo();