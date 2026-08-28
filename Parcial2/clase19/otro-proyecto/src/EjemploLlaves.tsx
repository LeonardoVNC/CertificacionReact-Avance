function EjemploLLaves() {
    const mensajito: string = "Bueeeeeeeena benja";
    const suma: number = 11 + 8 + 13 + 23 + 18 + 1;

    const sumar = (a: number, b: number): number => {
        return a + b
    }
    const otraSuma: number = sumar(3, 4);

    return (
        <section>
            <h1>
                {mensajito}
            </h1>
            <p>
                La primera suma es {suma}
            </p>
            <p>
                La segunda suma es {otraSuma}
            </p>
        </section>
    );
}

export default EjemploLLaves;