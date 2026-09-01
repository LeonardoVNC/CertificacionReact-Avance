import { useState } from "react";
import type { KeyboardEvent } from "react";

type Celda = number | 'O'
type Fila = Celda[]
type Tablero = Fila[]

function Serpiente() {
    const tableroVacio: Tablero = Array<Fila>(8)
    for (let index = 0; index < tableroVacio.length; index++) {
        tableroVacio[index] = Array<Celda>(8).fill(-1)
    }
    const longitudInicio = 3
    const setInicio = () => {
        let tablero = tableroVacio.map(fila => [...fila])
        for (let i = 1; i <= longitudInicio; i++) {
            tablero[8 - i][0] = i
        }
        return tablero
    }

    const colocarFruta = (tableroActual: Tablero): Tablero => {
        const celdasVacias: Array<{ fila: number; columna: number }> = []
        for (let fila = 0; fila < tableroActual.length; fila++) {
            for (let col = 0; col < tableroActual[fila].length; col++) {
                if (tableroActual[fila][col] === -1) {
                    celdasVacias.push({ fila, columna: col })
                }
            }
        }
        if (celdasVacias.length === 0) return tableroActual

        const celdaAleatoria = celdasVacias[Math.floor(Math.random() * celdasVacias.length)]
        const tableroNuevo = tableroActual.map(fila => [...fila])
        tableroNuevo[celdaAleatoria.fila][celdaAleatoria.columna] = 'O'
        return tableroNuevo
    }

    const tableroInicio: Tablero = colocarFruta(setInicio())

    const [tablero, setTablero] = useState<Tablero>(tableroInicio);
    const [juegoActivo, setJuegoActivo] = useState(true);

    const manejarTecla = (evento: KeyboardEvent<HTMLDivElement>) => {
        if (!juegoActivo) return

        let direccion: { fila: number; columna: number } | null = null

        if (evento.key === 'ArrowUp') direccion = { fila: -1, columna: 0 }
        else if (evento.key === 'ArrowDown') direccion = { fila: 1, columna: 0 }
        else if (evento.key === 'ArrowLeft') direccion = { fila: 0, columna: -1 }
        else if (evento.key === 'ArrowRight') direccion = { fila: 0, columna: 1 }

        if (!direccion) return

        let posicionCabeza: { fila: number; columna: number } | null = null
        let numeroCabeza = -1

        for (let fila = 0; fila < tablero.length; fila++) {
            for (let col = 0; col < tablero[fila].length; col++) {
                if (typeof tablero[fila][col] === 'number' && tablero[fila][col] > numeroCabeza) {
                    numeroCabeza = tablero[fila][col] as number
                    posicionCabeza = { fila, columna: col }
                }
            }
        }

        if (!posicionCabeza) return

        const nuevaFila = posicionCabeza.fila + direccion.fila
        const nuevaColumna = posicionCabeza.columna + direccion.columna

        if (nuevaFila < 0 || nuevaFila >= 8 || nuevaColumna < 0 || nuevaColumna >= 8) {
            setJuegoActivo(false)
            alert('Chao amigo, te comiste un muro')
            return
        }

        const celdaDestino = tablero[nuevaFila][nuevaColumna]

        if (typeof celdaDestino === 'number' && celdaDestino > 0) {
            setJuegoActivo(false)
            alert('Chao amigo, te comiste... solo...? Ouroboros?')
            return
        }

        const tableroNuevo = tablero.map(fila => [...fila])

        const comioFruta = celdaDestino === 'O'

        if (comioFruta) {
            tableroNuevo[nuevaFila][nuevaColumna] = numeroCabeza + 1

            const tableroConNuevaFruta = colocarFruta(tableroNuevo)
            setTablero(tableroConNuevaFruta)
        } else {
            for (let fila = 0; fila < tableroNuevo.length; fila++) {
                for (let col = 0; col < tableroNuevo[fila].length; col++) {
                    if (typeof tableroNuevo[fila][col] === 'number' && tableroNuevo[fila][col] > 0) {
                        tableroNuevo[fila][col] = (tableroNuevo[fila][col] as number) - 1
                    }
                }
            }

            for (let fila = 0; fila < tableroNuevo.length; fila++) {
                for (let col = 0; col < tableroNuevo[fila].length; col++) {
                    if (tableroNuevo[fila][col] === 0) {
                        tableroNuevo[fila][col] = -1
                    }
                }
            }

            tableroNuevo[nuevaFila][nuevaColumna] = numeroCabeza
            setTablero(tableroNuevo)
        }
    }

    return (
        <div tabIndex={0} onKeyDown={manejarTecla} className={juegoActivo ? '' : 'game-over'}>
            <h1>Segundo Parcial - Momento Serpiente</h1>
            {!juegoActivo && <h2>Chao</h2>}
            <table>
                <tbody>
                    {
                        tablero.map((fila, filaIdx) => (
                            <tr key={filaIdx}>
                                {
                                    fila.map((celda, colIdx) => {
                                        let numeroMaximo = -1
                                        for (let f = 0; f < tablero.length; f++) {
                                            for (let c = 0; c < tablero[f].length; c++) {
                                                if (typeof tablero[f][c] === 'number' && tablero[f][c] > numeroMaximo) {
                                                    numeroMaximo = tablero[f][c] as number
                                                }
                                            }
                                        }
                                        if (celda === 'O') {
                                            return <td key={colIdx} className="comida">{celda}</td>
                                        } else if (typeof celda === 'number' && celda === numeroMaximo) {
                                            return <td key={colIdx} className="cabeza">{celda}</td>
                                        } else if (typeof celda === 'number' && celda > 0) {
                                            return <td key={colIdx} className="cuerpo">{celda}</td>
                                        } else {
                                            return <td key={colIdx} className="fondo">{celda}</td>
                                        }
                                    })
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Serpiente;