const bombaStr = '&#128163';
const tortugaStr = '🐢';
let table;
let bombas = new Set();

function init() {
    table = document.querySelector('.table-buscaminas')
    console.log(table)
    bombas = new Set();
    bombas.add('02')
    bombas.add('10')
    bombas.add('23')
    bombas.add('31')
}

function check(input) {
    if (bombas.has(input)) {
        console.log("Acabamos de explotar")
    } else {
        console.log("Todo salio bien, wiii")
    }
}