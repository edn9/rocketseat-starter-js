//classes

class Matematica{
    static soma(a, b){
        return a + b;
    }
}

console.log(Matematica.soma(1, 2));

// class TodoList {
//     constructor(){
//         this.todos = [];
//     }

//     static addTodo(){
//         this.todos.push('novo todo');
//         console.log(this.todos);
//     }
// }

// TodoList.addTodo();
// TodoList.addTodo();
// TodoList.addTodo();
// TodoList.addTodo();

// class List {
//     constructor(){
//         this.data = [];
//     }

//     add(data){
//         this.data.push(data);
//         console.log(this.data);
//     }
// }

// class TodoList extends List {
//     constructor(){
//         super();
//         this.usuario = 'Diego';
//     }

//     mostraUsuario(){
//         console.log(this.usuario);
//     }
//     // constructor() {
//     //     this.todos = [];
//     // }

//     // addTodo() {
//     //     this.todos.push('Novo todo');
//     //     console.log(this.todos);
//     // }
// }

// var MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function(){
//     MinhaLista.add('Novo todo');
// }

// MinhaLista.mostraUsuario();