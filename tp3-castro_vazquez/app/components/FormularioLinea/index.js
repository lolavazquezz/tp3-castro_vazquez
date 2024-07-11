import styles from '../FormularioLinea/FormularioLinea.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormularioLinea = ({tipo, nombre, label, placeholder}) => {
    return (
        <>
            <label className={styles.label}>{label}</label>
            { tipo === 'textarea' ? <textarea name={nombre} className={styles.textarea} class="u-full-width"></textarea> : <input type={tipo} name={nombre} placeholder={placeholder} className={styles.input} class="u-full-width"></input>}
        </>  
    )
}

export default FormularioLinea;