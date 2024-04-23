document.addEventListener('DOMContentLoaded', function() {
    update024()
});


// aula 23 ------------------------------------------------------------------------------

let timer;
let cache = [0, 0, 0]

function getTimer(fc) {
    const text = document.getElementById('hrAula023')
    const dt = new Date()
    dt.setHours(cache[0], cache[1], cache[2])


    if (fc === 'ini') {
        text.style.color = 'black'

        if (timer == undefined) {
            timer = setInterval(function ini() {

                const horas = String(dt.getHours()).padStart(2, '0');
                const minutos = String(dt.getMinutes()).padStart(2, '0');
                const segundos = String(dt.getSeconds()).padStart(2, '0');


                dt.setSeconds(dt.getSeconds() + 1)
                cache = [dt.getHours(), dt.getMinutes(), dt.getSeconds()]
                text.innerText = `${horas}:${minutos}:${segundos}`

            }, 1000)
        }


    } else if (fc === 'stop') {
        clearInterval(timer)
        timer = undefined
        text.style.color = 'red'


    } else if (fc === 'reset') {
        text.style.color = 'black'
        clearInterval(timer)
        timer = undefined
        cache = [0, 0, 0];
        document.getElementById('hrAula023').innerText = `00:00:00`

    }

}

// aula 24 ------------------------------------------------------------------------------

let DBaula024 = []

function CreateLi() {
    const inp = document.getElementById('inpAula024');

    if (!inp.value) {
        alert("Adicione valores válidos à sua lista de tarefas.")
    } else {
        ADD024(inp.value)
        inp.value = ''
        inp.focus()

    }
}

// ADD e DELL itens da lista.

function ADD024(inp) {
    const id = DBaula024.length
    DBaula024.push({ id, inp })

    saveAndaLoad()
    update024()
}

function DELL024(bt) {
    const ids = parseInt(bt.getAttribute("indx"))
    for (i in DBaula024) {
        if (DBaula024[i].id === ids) {
            const index = DBaula024.indexOf(DBaula024[i])

            DBaula024.splice(index, 1)
        }
    }


    saveAndaLoad()
    update024()
}

// Atualiza a lista

function update024() {
    document.getElementById('UlAula024').innerHTML = ""


    if (!localStorage.getItem('DB')) {
        const DBjson = JSON.stringify(DBaula024)
        localStorage.setItem('DB', DBjson)
    }

    const cache = JSON.parse(localStorage.getItem('DB'))
    DBaula024 = cache

    for (i in DBaula024) {
        const txt = DBaula024[i].inp
        const id = DBaula024[i].id

        document.getElementById('UlAula024').innerHTML += `<div class="HbuttonCfg2"> <p>${txt}    <button class="bt2" indx="${id}" onclick="DELL024(this)">DELL</button></p> </div>`
    }
}

// Salva O json

function saveAndaLoad() {
    const DBjson = JSON.stringify(DBaula024)
    localStorage.setItem('DB', DBjson)

    const cache = JSON.parse(localStorage.getItem('DB'))
    DBaula024 = cache

}