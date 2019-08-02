//3.2
import axios from 'axios';
// function getUserFromGithub(user) {  
//     axios.get(`https://api.github.com/users/${user}`)    
//     .then(response => {      
//         console.log(response.data);    
//     })    
//     .catch(err => {      
//         console.log('Usuário não existe');    
//     })
// }

class Api {
    static async getUserFromGithub(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch (err) {
            console.warn('Usuario não existe.');
        }

    }
}

Api.getUserFromGithub('diego3g');
Api.getUserFromGithub('diego3g124123');