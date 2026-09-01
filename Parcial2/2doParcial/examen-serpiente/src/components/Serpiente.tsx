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

    const manejarTecla = (evento: KeyboardEvent<HTMLDivElement>) => {
        if (evento.key === 'ArrowUp') {
            console.log('arriba')
        }
        if (evento.key === 'ArrowDown') {
            console.log('abajo')
        }
        if (evento.key === 'ArrowLeft') {
            console.log('izq')
        }
        if (evento.key === 'ArrowRight') {
            console.log('der')
        }
    }

    return (
        <div tabIndex={0} onKeyDown={manejarTecla}>
            <h1>Segundo Parcial - Momento Serpiente</h1>
            <table>
                <tbody>
                    {
                        tablero.map((fila) => (
                            <tr>
                                {
                                    fila.map((celda) => {
                                        if (celda === 'O') {
                                            return <td className="comida">{celda}</td>
                                        } else if (celda === 3) {
                                            return <td className="cabeza">{celda}</td>
                                        } else if (celda === 2 || celda === 1) {
                                            return <td className="cuerpo">{celda}</td>
                                        } else {
                                            return <td className="fondo">{celda}</td>
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