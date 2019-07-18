var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function renderRepositories(repositories) {
    listElement.innerHTML = "";

    for (repo of repositories) {
        const textElement = document.createTextNode(repo.name);
        const liElement = document.createElement('li');

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
    }
}

function renderLoading() {
    listElement.innerHTML = "";
    // document.querySelector('input').value = ('');
}

function renderError() {
    var textElement = document.createTextNode('Erro!');
    var errorElement = document.createElement('li');

    errorElement.style.color = '#F00';

    errorElement.appendChild(textElement);
    listElement.appendChild(errorElement);
}

function listRepositories() {
    var user = inputElement.value;

    if (!user) return;

    renderLoading();
    
    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function (response) {
            renderRepositories(response.data);
        })
        .catch(function () {
            renderError();
        });
}
/* function usuario() {
    listando();
    var userElement = document.querySelector('input[name=user]');
    var text = userElement.value;
    console.log('https://api.github.com/users/' + text + '/repos');
    axios.get('https://api.github.com/users/' + text + '/repos')
        .then(function (response) {
            removeListando();
            console.log(response);
            console.log('Ok');
            var a = 1;
            while (a < 6) {
                var buttonElement = document.querySelector('#app');
                var ulElement = document.createElement('ul');
                var liElement = document.createElement('li');
                var textElement = document.createTextNode('repo' + a);
                a++;
                buttonElement.appendChild(ulElement);
                ulElement.append(liElement);
                liElement.appendChild(textElement);
            }

        })
        .catch(function (error) {
            removeListando();
            console.warn(error);
            var buttonElement2 = document.querySelector('#app');
            var ulElement2 = document.createElement('p');
            var textElement2 = document.createTextNode('Error 404 - Usuario não existe');
            buttonElement2.appendChild(ulElement2);
            ulElement2.appendChild(textElement2);
        });

    document.querySelector('input').value = ('');
}

function listando() {
    var buttonElement2 = document.querySelector('#app');
    var ulElement2 = document.createElement('p');
    var textElement2 = document.createTextNode('Listando...');
    buttonElement2.appendChild(ulElement2);
    ulElement2.appendChild(textElement2);
}

function removeListando() {
    var removecampo = document.querySelector('#app');
    var removep = document.querySelector('p');
    removecampo.removeChild(removep);
} */