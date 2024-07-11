import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../Titulo/Titulo.module.css'
export default function Titulo ({texto}) {
    return (
        <h1 className={styles.h1}>{texto}</h1>            
    )
}
