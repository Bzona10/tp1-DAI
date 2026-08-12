import styles from ".NotaInput.module.css";

export default function NotaInput() {
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