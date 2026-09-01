interface SaludosProps {
    nombre?: string
}
function Saludos(props: SaludosProps) {
    const numeritos = [1, 2, 3, 4, 5, 6, 7, 8]
    const dobles = numeritos.map((item) => { return item * 2 })

    return (
        <>
            {props.nombre && (
                <>
                    <h3>Saluditos a {props.nombre}</h3>
                    {dobles.map((item) => {
                        return <>
                            {item},
                        </>
                    })}
                    <br />
                    Hay un índice aqui: {dobles.indexOf(10)}
                </>
            )}
            {!props.nombre && (
                <>
                    <h3>Hoy no hay saluditos para nadie :c</h3>
                    {dobles.slice(3, 6).map((item) => {
                        return <>
                            {item},
                        </>
                    })}
                    <br />
                    Hay un elemento tre? {dobles.includes(3) ? 'si' : 'no'}
                </>
            )}
        </>
    );
}

export default Saludos;