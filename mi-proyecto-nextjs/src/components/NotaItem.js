import styles from "./NotaItem.module.css";

export default function NotaItem({ nota, indice, onEliminar }) {
    return (
        <li className={styles.item}>
            <span className={styles.nota}>
                Nota N° {indice + 1}: {nota}
            </span>

            <span className={nota >= 6 ? styles.aprueba : styles.noAprueba}>
                {nota >= 6 ? "Aprueba" : "No aprueba"}
            </span>

            <button
                className={styles.boton}
                onClick={() => onEliminar(indice)}
            >
                Eliminar
            </button>
        </li>
    );
}