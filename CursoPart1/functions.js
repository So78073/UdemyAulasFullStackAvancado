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