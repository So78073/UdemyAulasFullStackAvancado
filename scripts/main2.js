// aula 23 ------------------------------------------------------------------------------

document.getElementById('inicAula023').addEventListener('click', function(event) {
    getTimer('ini')
});

document.getElementById('pausAula023').addEventListener('click', function(event) {
    getTimer('stop')
});

document.getElementById('zeraAula023').addEventListener('click', function(event) {
    getTimer('reset')


});

// aula 24 ------------------------------------------------------------------------------

document.getElementById('btAula24').addEventListener('click', function() {
    CreateLi()
})

document.getElementById('inpAula024').addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        CreateLi()
    };
})

document.getElementById('dellAula024').addEventListener('click', function() {
    DELL024(2)
})