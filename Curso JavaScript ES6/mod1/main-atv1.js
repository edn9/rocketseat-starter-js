//1º exercício
class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin () {
        //return this.admin === true;
        if (this.admin === true ) {
            return 'É admin.';
        } else {
            return 'Não é admin.';
        }
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);

        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true