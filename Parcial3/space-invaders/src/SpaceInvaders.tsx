import { useEffect, useState } from "react";

type Block = {
    x: number,
    y: number,
}

function SpaceInvaders() {
    const BLOCK_SIZE = 5

    //Control de Ventana
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [windowHeigth, setWindowHeigth] = useState<number>(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
            setWindowHeigth(window.innerHeight)
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    //Bulletproof pero sin el proof pq solo es una bala
    const [disparos, setDisparos] = useState<Array<Block>>([])

    const addBullet = () => {
        setDisparos((prev) => [...prev, { x: windowWidth / 2, y: BLOCK_SIZE }])
    }

    const moveBullets = () => {
        setDisparos((prev) => prev.map((bullet) => ({
            ...bullet,
            y: bullet.y + BLOCK_SIZE,
        })))
    }

    //No bulletproof pq es un alien acci acci dente el accidente
    const [aliens, setAliens] = useState<Array<Block>>([]);

    const moveAliens = () => {
        const newAliens = [...aliens]
        newAliens.forEach((alien) => {
            alien.y = alien.y >= 60 ? 0 : alien.y + BLOCK_SIZE
            alien.x = alien.x + (Math.floor(Math.random() * 3) - 1) * BLOCK_SIZE
        })
        setAliens(newAliens)
    }

    const generateAlien = () => {
        if (aliens.length >= 5) return
        let posX = (Math.floor(Math.random() * 10) + 5) * 5
        aliens.push({ x: posX, y: 0 })
    }

    // Eventitos
    const onKeyPressed = (evento: KeyboardEvent) => {
        if (evento.code === 'Space') {
            evento.preventDefault();
            addBullet()
        }
    }
    useEffect(() => {
        window.addEventListener('keydown', onKeyPressed)
        return () => window.removeEventListener('keydown', onKeyPressed)
    }, [windowWidth])

    // Ticks (tocks waaaaj)
    const onTickDo = () => {
        moveBullets()
        moveAliens()
        generateAlien()
    }

    useEffect(() => {
        const tick: number = setInterval(() => {
            onTickDo()
        }, 1000)

        return () => clearInterval(tick)
    }, [])

    return (
        <>
            <div className="arma">
                Soy una base
            </div>
            {disparos.map((bullet, idx) => (
                <div className="disparo" key={idx}
                    style={{
                        left: `${bullet.x}px`,
                        bottom: `${bullet.y}rem`,
                        transform: 'translateX(-50%)'
                    }}
                >
                    x:{bullet.x}, y: {bullet.y}, idx: {idx}
                </div>
            ))}
            {aliens.map((alien, idx) => (
                <div className="alien" key={idx}
                    style={{
                        left: `${alien.x}rem`,
                        top: `${alien.y}rem`,
                        transform: 'translateX(-50%)'
                    }}
                >
                    x:{alien.x}, y:{alien.y}
                </div>
            ))}
        </>
    );
}

export default SpaceInvaders;