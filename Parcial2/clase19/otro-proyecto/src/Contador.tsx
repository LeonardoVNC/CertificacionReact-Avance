import { useState } from "react";

interface ContadorProps {
    startsAt?: number
}

function Contador({ startsAt = 0 }: ContadorProps) {
    const [contador, setContador] = useState<number>(startsAt);

    const contar = (): void => {
        setContador(contador + 1)
        console.log(contador)
    }
    return (
        <>
            <button onClick={contar}>{contador}</button>
        </>
    );
}

export default Contador;