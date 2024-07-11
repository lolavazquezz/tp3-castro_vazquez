import styles from '../Subtitulo/Subtitulo.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Subtitulo = ({texto}) => {
    return <h2 className={styles.h2}> {texto}</h2>;
}

export default Subtitulo;