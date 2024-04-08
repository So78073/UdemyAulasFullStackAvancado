document.getElementById("aula013Cache").innerText = `Dados Cadastrados: ${cacheAula013.length}`;
document.getElementById("aula014Cache").innerText = `Dados Cadastrados: ${cacheAula013.length}`;


document.addEventListener('DOMContentLoaded', function() {
    let txt = document.getElementById("txtAula012");

    txt.innerHTML += `<p>Raiz Quadrada: X</p>`;
    txt.innerHTML += `<p>X é inteiro:</p>`;
    txt.innerHTML += `<p>X é um numero: </p>`;
    txt.innerHTML += `<p>Arredondado para cima: X</p>`;
    txt.innerHTML += `<p>Arredondado para baixo: X</p>`;
    txt.innerHTML += `<p>2 casas Decimais X.xx:</p>`;

});

const checkboxAula005 = document.getElementById('checkboxAula05');
checkboxAula005.addEventListener('change', function() {
    let nome = document.getElementById("aula005Nome");
    let idade = document.getElementById("aula005Idade");
    let peso = document.getElementById("aula005Peso");
    let altura = document.getElementById("aula005Altura");

    if (this.checked) {
        nome.value = 'Pedro Soares';
        idade.value = 21;
        peso.value = 47.5;
        altura.value = 1.75;
    } else {
        nome.value = '';
        idade.value = '';
        peso.value = '';
        altura.value = '';
    }
});

const checkboxAula013 = document.getElementById('checkboxAula013');



checkboxAula013.addEventListener('change', function() {
    let nome = document.getElementById("aula013nome");
    let sobrenome = document.getElementById("aula013sobrenome");
    let peso = document.getElementById("aula013peso");
    let altura = document.getElementById("aula013altura");


    const nomesPrimarios = ['Pedro', 'Lucas', 'Bruno', 'João', 'Gabriel', 'Mateus', 'Gustavo', 'Matheus', 'Rafael', 'Daniel', 'Diego', 'Vinicius', 'Felipe', 'Guilherme', 'Eduardo'];
    const sobrenomes = ['Silva', 'Oliveira', 'Santos', 'Souza', 'Costa', 'Pereira', 'Rodrigues', 'Almeida', 'Nunes', 'Lima', 'Ferreira', 'Carvalho', 'Martins', 'Barbosa', 'Pereira'];


    const randintNome = Math.floor(Math.random() * (nomesPrimarios.length - 0 + 1)) - 1;
    const randintSobrenome = Math.floor(Math.random() * (nomesPrimarios.length - 0 + 1)) - 1;


    const randPeso = (Math.random() * (120 - 45) + 45).toFixed(2);
    const randAltura = (Math.random() * (2 - 1.40) + 1.40).toFixed(2);


    if (this.checked) {
        nome.value = nomesPrimarios[randintNome];
        sobrenome.value = sobrenomes[randintSobrenome];
        peso.value = randPeso;
        altura.value = randAltura;
    } else {
        nome.value = '';
        sobrenome.value = '';
        peso.value = '';
        altura.value = '';
    }
});