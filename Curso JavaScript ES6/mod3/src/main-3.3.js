//3.3
import axios from 'axios';

// class Github {  
//     static getRepositories(repo) {    
//         axios.get(`https://api.github.com/repos/${repo}`)      
//         .then(response => {        
//             console.log(response.data);      
//         })      .catch(err => {        
//             console.log('Repositório não existe');
//         })  
//     }
// }

class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response);
        } catch (err) {
            console.warn('Repositório não existe.');
        }

    }
}


Github.getRepositories('edn9/rocketseat-starter-js');
Github.getRepositories('rocketseat/dslkvmskv');