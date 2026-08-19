"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
    const [alumno, setAlumno] = useState("");
    const [mostrarAyuda, setMostrarAyuda] = useState(false);

    useEffect(() => {
        document.title = "Pio Promedios - Inicio";
    }, []);

    useEffect(() => {
        console.log("El alumno cambió:", alumno);
    }, [alumno]);

    const manejarCambio = (event) => {
        setAlumno(event.target.value);
    };

    return (
        <main className={styles.pagina}>
            <div className={styles.columna}>
                <h1>Pio Promedios</h1>

                <input
                    className={styles.input}
                    type="text"
                    value={alumno}
                    onChange={manejarCambio}
                    placeholder="Ingresá tu nombre"
                />

                {alumno === "" ? (
                    <p className={styles.mensaje}>
                        Por favor, ingresá tu nombre para continuar.
                    </p>
                ) : (
                    <div className={styles.bienvenida}>
                        <p>¡Hola, {alumno}!</p>
                        <p>
                            La calculadora de promedios se encuentra en:
                            http://localhost:3000/notas
                        </p>
                    </div>
                )}

                <button
                    className={styles.boton}
                    onClick={() => setMostrarAyuda(!mostrarAyuda)}
                >
                    Mostrar/Ocultar ayuda
                </button>

                {mostrarAyuda && (
                    <ul className={styles.ayuda}>
                        <li>Ingresá tu nombre.</li>
                        <li>Ingresá a la página de notas.</li>
                        <li>Cargá tus notas entre 0 y 10.</li>
                        <li>Podés eliminar las notas que hayas agregado.</li>
                        <li>La aplicación calculará automáticamente el promedio.</li>
                    </ul>
                )}
            </div>
        </main>
    );
}