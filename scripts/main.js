document.addEventListener('DOMContentLoaded', function() {
    aula016()

});

function aula001() {
    let data = new Date();
    var nome = document.getElementById('nome').value;
    nome = nome.toUpperCase()
    var quest = document.getElementById('quest001');


    let textAula01 = `Olé, meu nome é ${nome} e estou aprendendo JS às ${data.getHours()}:${data.getMinutes()} da manhã`

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
    let textAula05 = `${nome} tem ${idade} anos, pesa ${peso} kg e tem ${altura} altura  e seu IMC é de ${IMC} e sua data de nascimento é ${data.getFullYear() - idade}`;

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
        };

    };

    if (type == "alert") {
        alert = window.alert('Agradeço a todos que clicaram aqui !!! 😁');
        outputAula007.innerText = 'Alert Gerado v _V ';
    }

    if (type == "pronpt") {
        let prompt = window.prompt("Digite seu testo !!");

        if (prompt == '') {
            prompt = 'Você não colocou nada 😤 coloque algo';
        }
        outputAula007.innerText = prompt;
    };
};

function aula009() {
    let A = document.getElementById('aula009A').value.toUpperCase(); // = B
    let B = document.getElementById('aula009B').value.toUpperCase(); // = C
    let C = document.getElementById('aula009C').value.toUpperCase(); // = A

    [A, B, C] = [B, C, A]

    let txt = document.getElementById('textAula009');
    txt.innerHTML = `var A= ${A} <br>var B= ${B} <br>var C= ${C} <br>`
};

function aula010() {
    let frase = "Teste, text, Texto, testo, Text, testando, apenas um testo de texte de index";
    let termoBusca = document.getElementById("TXTaula010").value;
    let iniIndexAula010 = parseInt(document.getElementById('IndexINIaula010').value);

    if (isNaN(iniIndexAula010)) {
        iniIndexAula010 = 0;
    };

    let textoDestacado = frase.replace(new RegExp(termoBusca, 'g'), `<span style='background-color: yellow;'>${termoBusca}</span>`);

    let quest = document.getElementById('quest010');
    quest.innerHTML = "Texto destacado: " + textoDestacado + "<br><br>Índice da primeira ocorrência: " + frase.indexOf(termoBusca, iniIndexAula010);
};

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
    };
};

function aula012() {
    let numStr = document.getElementById("aula012Nome").value.trim();
    let num = parseFloat(numStr);

    let txt = document.getElementById("txtAula012");

    if (isNaN(num)) {
        txt.innerText = "Por favor, insira um valor numérico válido.";
    } else {
        txt.innerHTML = '';
        txt.innerHTML += `<p>Raiz Quadrada: ${Math.sqrt(num)}</p>`;
        txt.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`;
        txt.innerHTML += `<p>${num} é um numero: ${!isNaN(num)}</p>`;
        txt.innerHTML += `<p>Arredondado para cima: ${Math.ceil(num)}</p>`;
        txt.innerHTML += `<p>Arredondado para baixo: ${Math.floor(num)}</p>`;
        txt.innerHTML += `<p>2 casas Decimais : ${num.toFixed(2)}</p>`;

        console.log('é dentro');
    }
}


function aula013() {
    const nome = document.getElementById('aula013nome').value;
    const sobrenome = document.getElementById('aula013sobrenome').value;
    const peso = parseFloat(document.getElementById('aula013peso').value);
    const altura = parseFloat(document.getElementById('aula013altura').value);

    let backLogAula13 = document.getElementById('CacheAula013Data');
    const checkboxAula013 = document.getElementById('checkboxAula013');

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
        backLogAula13.innerHTML += `<p> ID ${cacheAula013.length} - ${nome + ' ' + sobrenome}</p>`;
        checkboxAula013.checked = false;

        document.getElementById("aula013Cache").innerText = `Dados Cadastrados: ${cacheAula013.length}`;
        document.getElementById("aula014Cache").innerText = `Dados Cadastrados: ${cacheAula013.length}`;

    }

    document.getElementById('aula013nome').value = '';
    document.getElementById('aula013sobrenome').value = '';
    document.getElementById('aula013peso').value = '';
    document.getElementById('aula013altura').value = '';

}

function aula014() {
    let elem = document.getElementById('aula014index').value - 1;
    if (cacheAula013.length == 0) {
        alert("não há nenhum dado amarzenado, tente adicionar usando a aula 13!");
    } else {
        document.getElementById("txtAula014").innerText = `Nome: ${cacheAula013[elem].nome +" "+cacheAula013[elem].sobrenome}\nPeso: ${cacheAula013[elem].peso}\nAltura: ${cacheAula013[elem].altura}`;
    }
};

function aula015() {
    const peso = document.getElementById("inputAula015Peso").value;
    const altura = document.getElementById("inputAula015altura").value;

    const txt = document.getElementById("respAula015");

    function imc(peso, altura) {

        let imc = (peso / (altura ** 2)).toFixed(2);
        let cache = null

        if (peso < 30 || peso > 260 || altura < 1.50 || altura > 2.5) {
            txt.style.color = 'red'
            return 'Isso realmente é um ser humano ? 🤡'

        } else {
            if (imc < 18.5) {
                cache[0] = 'Abaixo do peso'
            } else if (imc >= 18.5 && imc <= 24.9) {
                cache = "Peso normal"
            } else if (imc >= 25 && imc <= 29.9) {
                cache = "Sobrepeso"
            } else if (imc >= 30 && imc <= 34.9) {
                cache = "Obesidade grau 1"
            } else if (imc >= 35 && imc <= 39.9) {
                cache = "Obesidade grau 2"
            } else if (imc >= 40) {
                cache = "Obesidade grau 3"
            }
            txt.style.color = 'green'
            return `Seu IMC é ${imc} - ${cache}`
        }

    };

    const IMC = imc(peso, altura);
    txt.innerText = IMC
    document.getElementById('checkboxAula015').checked = false;

}

function aula016() {

    let data = new Date();
    const monthsOfYear = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const month = monthsOfYear[data.getMonth()]


    let day = ''
    switch (data.getDay()) {
        case 0:
            day = 'Domingo';
            break;
        case 1:
            day = 'Segunda-feira';
            break;
        case 2:
            day = 'Terça-feira';
            break;
        case 3:
            day = 'Quarta-feira';
            break;
        case 4:
            day = 'Quinta-feira';
            break;
        case 5:
            day = 'Sexta-feira';
            break;
        case 6:
            day = 'Sabado';
            break;
    }
    const str = `${day}, ${data.getDate()} ${month} de ${data.getFullYear()} - ${data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds()}`
    document.getElementById('DataTimeAula016').innerText = str

}

function aula019(mtd) {
    if (mtd == 'del') {
        document.getElementById('quesAula019').innerHTML = '';
    } else if (mtd == 'add') {

        const elem = [{ type: 'p', txt: 'Paragrafo' }, { type: 'div', txt: 'Texto dentro da div' }, { type: 'footer', txt: 'Texto dentro do footer' }, { type: 'section', txt: 'Texto dentro da section' }]
        document.getElementById('quesAula019').innerHTML = ''
        for (let i = 0; i < elem.length; i++) {
            let { type, txt } = elem[1]
            document.getElementById('quesAula019').innerHTML += `<${type}>${txt}</${type}>`;
        }
    }
}

function aula020(type) {
    const divDaddy020 = document.querySelector(".ParagrafosAula020");
    const pr = divDaddy020.querySelectorAll('p');
    const bodyColor = getComputedStyle(document.body).backgroundColor;

    if (type === 'quest') {
        for (p of pr) {
            p.style.backgroundColor = `${bodyColor}`
        }
    } else if (type === 'cls') {
        for (p of pr) {
            p.style.backgroundColor = `rgba(0,0,0,0)`
            p.style.color = 'black'
        }
    } else if (type === 'youColor') {
        for (p of pr) {
            p.style.backgroundColor = `${document.getElementById('colorAula020_1').value}`
            p.style.color = `${document.getElementById('colorAula020_2').value}`
        }
    }
}

function aula021(opc) {
    const num1Input = document.getElementById("wightAula021");
    const num2Input = document.getElementById("heightAula021");


    const width = parseInt(num1Input.value);
    const height = parseInt(num2Input.value);



    if (isNaN(width) || isNaN(height)) {
        alert("coloque valores validos, por gentileza!")
    } else {
        const result = (width > height) ? 'paisagem' : 'Retrato'
        document.getElementById("questAula021").innerText = `w = ${width} h = ${height} == ${result}`
    }
}

function aula022(mt) {
    if (mt == 'youN') {
        const num = document.getElementById('inputAula022').value
        let stt = []
        if (num.trim().length === 0) {
            alert("O Espaço esta vazio, preencha com algo.")
        } else {

            if (isNaN(num)) {
                console.log(num);

            } else {
                const Fizz = (num % 3) === 0 ? 'Fizz' : ''
                const Buzz = (num % 5) === 0 ? 'Buzz' : ''
                document.getElementById("questAula022_1").innerText = `${Fizz + Buzz}`
            }
        }
    } else if (mt == 'range') {

        let Fizz = []
        let Buzz = []
        let FizzBuzz = []

        for (let n = 0; n < 20; n++) {
            const rNum = Math.floor(Math.random() * (20 - 0) + 0);
            if (rNum % 3 === 0) {
                Fizz.push(rNum)
            }
            if (rNum % 5 === 0) {
                Buzz.push(rNum)
            }
            if (rNum % 5 === 0 && rNum % 3 === 0) {
                FizzBuzz.push(rNum)
            }
        }
        document.getElementById("questAula022_2").innerText = `Fizz: (/3) = ${Fizz.length} -- ${Fizz}\nBuzz: (/5) = ${Buzz.length} -- ${Buzz}\nFizzBuzz = ${FizzBuzz.length} -- ${FizzBuzz}\n`
    }
}