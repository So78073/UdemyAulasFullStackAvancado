let dt = new Date();
let cacheAula013 = [{ nome: "Pedro Lucas", sobrenome: "Soares de Assis", peso: 47.45, altura: 1.75 }]


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
            prompt = 'Você não colocou nada 😤 coloque algo'
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
    txt.innerHTML = `var A= ${A} <br>var B= ${B} <br>var C= ${C} <br>`
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

function aula011() {
    let nome = document.getElementById("aula011Nome").value;
    let textoTrat = document.getElementById("TXTaula011");
    if (nome.trim().length === 0) {
        alert("Por favor adicionar um nome valido")

    } else {
        textoTrat.innerText = `
        Seu nome é: ${nome}\n
        Seu nome tem ${nome.length} letras \n
        A segunda letra do seu nome é: ${nome[1]}\n
        O primeiro índice da letra "a" no seu nome: ${nome.indexOf("a")}\n
        Último índice da letra "a" no seu nome: ${nome.lastIndexOf("a")}\n
        As últimas 3 letras do seu nome são: ${nome.slice(-3)}\n
        Seu nome dividido: ${nome.split(' ')}\n
        Seu nome em MAIÚSCULAS: ${nome.toUpperCase()}\n
        Seu nome em minúsculas: ${nome.toLowerCase()}\n`
    }
}

function aula012() {
    let numStr = document.getElementById("aula012Nome").value.trim(); // Obtém o valor e remove espaços em branco
    let num = parseFloat(numStr); // Converte a string em número

    let txt = document.getElementById("txtAula012");

    if (isNaN(num)) { // Verifica se num não é um número válido
        txt.innerText = "Por favor, insira um valor numérico válido.";
    } else {
        txt.innerHTML = '';
        txt.innerHTML += `<p>Raiz Quadrada: ${Math.sqrt(num)}</p>`;
        txt.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`;
        txt.innerHTML += `<p>${num} é um numero: ${!isNaN(num)}</p>`;
        txt.innerHTML += `<p>Arredondado para cima: ${Math.ceil(num)}</p>`;
        txt.innerHTML += `<p>Arredondado para baixo: ${Math.floor(num)}</p>`;
        txt.innerHTML += `<p>2 casas Decimais : ${num.toFixed(2)}</p>`;


    }
}


function aula013() {
    const nome = document.getElementById('aula013nome').value;
    const sobrenome = document.getElementById('aula013sobrenome').value;
    const peso = parseFloat(document.getElementById('aula013peso').value);
    const altura = parseFloat(document.getElementById('aula013altura').value);

    if (isNaN(peso) || isNaN(altura)) {
        alert("Coloque valores válidos no peso e altura");
    } else {
        let guy = {
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        };
        cacheAula013.push(guy);

        document.getElementById("aula013Cache").innerText = `Dados Cadastrados: ${cacheAula013.length}`;
        document.getElementById("aula014Cache").innerText = `Dados Cadastrados: ${cacheAula013.length}`;


    }
}

function aula014() {
    let elem = document.getElementById('aula014index').value - 1;
    document.getElementById("txtAula014").innerText = `Nome: ${cacheAula013[elem].nome +" "+cacheAula013[elem].sobrenome}\nPeso: ${cacheAula013[elem].peso}\nAltura: ${cacheAula013[elem].altura}`

}