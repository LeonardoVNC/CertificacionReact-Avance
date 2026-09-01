import { useState } from "react";

type Marca = 'X' | 'O'
type Celda = Marca | null
type Tablero = Celda[];

function TresEnRaya() {
    const tableroInicial: Tablero = Array<Celda>(9).fill(null)
    const [tablero, setTablero] = useState<Tablero>(tableroInicial);
    const [turno, setTurno] = useState<Marca>('X')

    const marcarCelda = (index: number): void => {
        if (tablero[index] = null) return;
        setTablero(tablero.map((celda, posicion) => {
            return posicion == index ? turno : celda
        }))
        setTurno(turno == 'X' ? 'O' : 'X')
    }

    return (
        <>
            <h1>Hola amigos, soy un tre en raya</h1>
            <section>
                <table>
                    {/* <tr>
                        {tablero.slice(0, 3).map((item, index) => <td onClick={() => { marcarCelda(index) }}>{item}</td>)}
                    </tr>
                    <tr>
                        {tablero.slice(3, 6).map((item, index) => <td onClick={() => { marcarCelda(index + 3) }}>{item}</td>)}
                    </tr>
                    <tr>
                        {tablero.slice(6, 9).map((item, index) => <td onClick={() => { marcarCelda(index + 6) }}>{item}</td>)}
                    </tr> */}
                    <tbody>
                        {
                            [0, 1, 2].map((fila) => {
                                return (
                                    <tr key={fila}>
                                        {tablero.slice(fila * 3, fila * 3 + 3).map((celda, columna) => 
                                            <td key={columna} onClick={() => { marcarCelda(fila*3+columna)}}>{celda}</td>                                        
                                        )}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>
        </>
    );
}

export default TresEnRaya;