import { useEffect, useState } from "react";

function SpaceInvaders() {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [izquierda, setIzquierda] = useState(windowWidth)
    const [abajo, setAbajo] = useState(5)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setIzquierda(windowWidth / 2)
    }, [windowWidth])

    const sube: number = setInterval(() => {
        setAbajo(abajo + 5)
    }, 1000)
    clearInterval(sube)

    return (
        <>
            <div className="arma">
                Soy una base
            </div>
            <div style={{
                position: 'absolute',
                width: '5rem',
                height: '5rem',
                left: `${izquierda}px`,
                bottom: `${abajo}rem`,
                background: 'red'
            }}>
                Soy un cuadrado
            </div>
        </>
    );
}

export default SpaceInvaders;