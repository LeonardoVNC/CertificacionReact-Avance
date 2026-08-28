import { useState } from "react";

function Contador() {
    const [contador, setContador] = useState<number>(0);

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