var dt = new Date();

function aula001() {
    var nome = document.getElementById('nome').value;
    nome = nome.toUpperCase()
    var quest = document.getElementById('quest001');


    let textAula01 = `Olé, meu nome é ${nome} e estou aprendendo JS às ${dt.getHours()}:${dt.getMinutes()} da manhã`

    quest.innerText = textAula01
    console.log(typeof(1 + '20'), "(1 + '20'): ", 1 + '20')

}

function aula005() {
    let nome = document.getElementById("aula005Nome").value
    let idade = document.getElementById("aula005Idade").value
    let peso = document.getElementById("aula005Peso").value
    let altura = document.getElementById("aula005Altura").value
    let IMC = (peso / (altura * altura)).toFixed(2)

    let quest = document.getElementById('aula005')
    let textAula05 = `${nome} tem ${idade} anos, pesa ${peso} kg e tem ${altura} altura  e seu IMC é de ${IMC} e sua data de nascimento é ${dt.getFullYear() - idade}`

    quest.innerText = textAula05
}

const checkbox = document.getElementById('checkboxAula055');
checkbox.addEventListener('change', function() {
    let nome = document.getElementById("aula005Nome")
    let idade = document.getElementById("aula005Idade")
    let peso = document.getElementById("aula005Peso")
    let altura = document.getElementById("aula005Altura")

    if (this.checked) {
        nome.value = 'Pedro Soares'
        idade.value = 21
        peso.value = 47.5
        altura.value = 1.75
    } else {
        nome.value = ''
        idade.value = ''
        peso.value = ''
        altura.value = ''
    }
});