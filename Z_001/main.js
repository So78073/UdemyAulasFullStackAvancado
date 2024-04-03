var dt = new Date();

function aula001() {
    var nome = document.getElementById('nome').value;
    nome = nome.toUpperCase()
    var quest = document.getElementById('quest001');


    let textAula01 = `Olé, meu nome é ${nome} e estou aprendendo JS às ${dt.getHours()}:${dt.getMinutes()} da manhã`

    quest.innerText = textAula01
    console.log(typeof(1 + '20'), "(1 + '20'): ", 1 + '20');

}

function aula005() {
    let nome = document.getElementById("aula005Nome").value;
    let idade = document.getElementById("aula005Idade").value;
    let peso = document.getElementById("aula005Peso").value;
    let altura = document.getElementById("aula005Altura").value;
    let IMC = (peso / (altura * altura)).toFixed(2);

    let quest = document.getElementById('aula005');
    let textAula05 = `${nome} tem ${idade} anos, pesa ${peso} kg e tem ${altura} altura  e seu IMC é de ${IMC} e sua data de nascimento é ${dt.getFullYear() - idade}`;

    quest.innerText = textAula05;
}

const checkbox = document.getElementById('checkboxAula055');
checkbox.addEventListener('change', function() {
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


function aula007(type) {


    let outputAula007 = document.getElementById('outputAula007');

    if (type == "confirm") {
        let confirm = window.confirm("Confirma ou não ?");
        if (confirm == true) {
            outputAula007.innerText = '😀🤙';
        } else {
            outputAula007.innerText = '😡👊';
        }

    }

    if (type == "alert") {
        alert = window.alert('Agradeço a todos que clicaram aqui !!! 😁');
        outputAula007.innerText = 'Alert Gerado v _V ';
    }

    if (type == "pronpt") {
        let prompt = window.prompt("Digite seu testo !!");

        if (prompt == '') {
            prompt = 'Você não dogotou nada 😤 pensa que me engana ?'
        }
        outputAula007.innerText = prompt;

    }

}

function aula009() {
    let A = document.getElementById('aula009A').value.toUpperCase(); // = B
    let B = document.getElementById('aula009B').value.toUpperCase(); // = C
    let C = document.getElementById('aula009C').value.toUpperCase(); // = A

    [A, B, C] = [B, C, A]

    let txt = document.getElementById('textAula009');
    txt.innerHTML = `var A= ${A} <br>var B= ${B} <br>var C=${C} <br>`
}

function aula010() {
    let frase = "Teste, text, Texto, testo, Text, testando, apenas um testo de texte de index";
    let termoBusca = document.getElementById("TXTaula010").value;
    let iniIndexAula010 = parseInt(document.getElementById('IndexINIaula010').value);

    if (isNaN(iniIndexAula010)) {
        iniIndexAula010 = 0;
    }

    let textoDestacado = frase.replace(new RegExp(termoBusca, 'g'), `<span style='background-color: yellow;'>${termoBusca}</span>`);

    let quest = document.getElementById('quest010');
    quest.innerHTML = "Texto destacado: " + textoDestacado + "<br><br>Índice da primeira ocorrência: " + frase.indexOf(termoBusca, iniIndexAula010);
}