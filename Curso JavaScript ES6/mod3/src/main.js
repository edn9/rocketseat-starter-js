//3.4
import axios from 'axios';

// const buscaUsuario = user => {  
//     axios.get(`https://api.github.com/users/${user}`)    
//     .then(response => {      
//         console.log(response.data);    
//     })    
//     .catch(err => {      
//         console.log('Usuário não existe');    
//     });
// }

const buscaUsuario = async user => {  
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);    
    } catch (err) {
        console.log('Usuário não existe');
    }
}


buscaUsuario('diego3g');
buscaUsuario('diego3gfasdad');