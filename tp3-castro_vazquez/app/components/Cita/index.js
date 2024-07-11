import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../Cita/Cita.module.css";
const Cita = ({nombreMascota, nombreDuenio, fecha, hora, sintomas, id, citas, setCitas}) => {
    const eliminar = () => {
        if (window.confirm("Deseas eliminar la cita?")){
            setCitas(citas.filter(c => c.id !== id))
        }
        
    }
    return (
        <div className={styles.cita}>

            <p>Mascota: <span>{nombreMascota}</span></p>
            <p>Dueño: <span>{nombreDuenio}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>
            <button onClick={eliminar} className={styles.eliminar}class="u-full-width" >Eliminar ×</button>
        </div>
    )
}

export default Cita;