function teste(x){
    let y = 2;

    if (x > 5){
        let y = 4;

        console.log(x, y);
    }
}

// console.log(y); //não permite pois o escopo let é delimitado no escopo "{ }"

teste(10);

// const usuario = { nome: 'Diego' };

// usuario.nome = 'Cleiton';

// console.log(usuario);

// // const a = 1;

// // a = 3;