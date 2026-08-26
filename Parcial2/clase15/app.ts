class Celda {
    fila: number;
    columna: number;
    valor: string;
    constructor(fila: number, columna: number, valor: string) {
        this.fila = fila
        this.columna = columna
        this.valor = valor
    }
}

// Como cuando haces React en tu chat pq olvidaste que habia que cambiar al repo:

// JS:
// let boton = document.querySelector('#boton-tarea')
// let lista = document.querySelector('ul')

// let contador = 1
// function agregarTarea () {
//   let tarea = document.createElement('li')
//   tarea.textContent = `Tarea ${contador}`
//   lista.appendChild(tarea)
//   contador++
// }
// boton.addEventListener('click', agregarTarea);

// let botonChao = document.querySelector('#boton-chao')
// let cabecera = document.querySelector('h1')
// let oculto = false

// function ocultar () {
//   cabecera.style.display = oculto ? 'flex' : 'none'
//   botonChao.textContent = oculto ? 'Ocultar Cabeza' : 'Mostrar Cabeza'
//   oculto = !oculto
// }
// botonChao.addEventListener('click', ocultar);


// HTML:
// <div>
//   <h1>Control de Tareas</h1>
//   <button id="boton-tarea">Agregar tarea</button>
//   <button id="boton-chao">Ocultar cabeza</button>
//   <ul>
//   </ul>
// </div>

// CSS:
// No hice pq me dio hueva XD