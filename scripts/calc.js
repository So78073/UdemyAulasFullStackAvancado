
const p1 = new Calc()

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('bt')) {
        p1.calcTextFilter(e.target)
    }
})

function Calc() {
    this.txt = '';
    this.Raiz = false

    this.calcTextFilter = function (elem) {
        const key = elem.getAttribute('key');

        switch (key) {
            case 'C':
                this.txt = '';
                break;
            case '<<':
                this.txt = this.txt.slice(0, -1);
                break;
            case 'R':
                this.Raiz = !this.Raiz
                const md = document.getElementById('Md')
                if (this.Raiz) {md.innerText = '√'} else {md.innerText = 'N'}
                break;
            case '=':
                const end = this.calcEnd()
                if (this.Raiz) {
                    this.txt = String(Math.sqrt(end).toFixed(2))
                    
                } else {console.log(end)}
                
                break;
        
            default:
                this.currentTxt(key)
        }

        this.updateDisplay()
        
    };

    this.currentTxt = function(key) {
        const lastInput = this.txt.slice(-1);
        const operadores = ['+', '-', '*', '^', '/'];

        const val = (operadores.includes(lastInput) && operadores.includes(key))


        if (val) {
            this.txt = this.txt.slice(0, -1);
        }

        this.txt += key
        this.updateDisplay()
    };

    this.calcEnd = function() {
        let cache = this.txt

        if (cache.includes("^")) {
            cache = this.txt.replace(/\^/g, "**")
        }
        this.txt = String(eval(cache))
        
        return this.txt
    }

    this.updateDisplay = function () {
        const display = document.getElementById('Display')
        display.value = this.txt
    }
}
