import { useState, useEffect } from "react";

function Reloj() {
    const [segundos, setSegundos] = useState<number>(0)
    useEffect(() => {
        const reloj: number = setInterval(() => {
            setSegundos((prev) => {
                return prev++;
            })
        }, 1000)
        return () => {
            clearInterval(reloj)
        }
    }, [])

    return (
        <>
            Segundos: {segundos}
        </>
    );
}

export default Reloj;