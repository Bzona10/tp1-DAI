import styles from ".NotaInput.module.css";

export default function NotaInput({onAgregar}) {
    const [nota, setNota] = useState(0);


    const incrementar = () => {
        setNota(nota + nuevaNota);
    };
    return (
        <>
            <h1>Ingrese 1 nota</h1>
            <h2>Suma actual de notas: {nota}</h2>
            <h2>Cantidad de notas agregadas: {nota.length}</h2>
            <h2>Promedio: {nota/nota.length}</h2>
            <input type="number" id="nuevaNota"> </input>
            <button>Botón</button>
        </>
    );
}

"use client";

import { useState } from "react";
import styles from "./NotaInput.module.css";

export default function NotaInput({ onAgregar }) {
    const [nota, setNota] = useState("");

    const manejarCambio = (event) => {
        setNota(event.target.value);
    };

    const notaValida = nota !== "" && Number(nota) >= 0 && Number(nota) <= 10;

    const agregar = () => {
        onAgregar(Number(nota));
        setNota("");
    };

    return (
        <div className={styles.contenedorInput}>
            <input
                className={styles.input}
                type="number"
                value={nota}
                onChange={manejarCambio}
            />

            {!notaValida && (
                <p className={styles.error}>
                    Ingresá una nota entre 0 y 10.
                </p>
            )}

            <button
                className={styles.boton}
                onClick={agregar}
                disabled={!notaValida}
            >
                Agregar nota
            </button>
        </div>
    );
}