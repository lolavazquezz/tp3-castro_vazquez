import '../FormularioLinea/FormularioLinea.module.css';
const FormularioLinea = ({tipo, nombre, label, placeholder}) => {
    return (
        <>
            <label class="label">{label}</label>
            { tipo === 'textarea' ? <textarea name={nombre} class="textarea u-full-width"></textarea> : <input type={tipo} name={nombre} placeholder={placeholder} class="input u-full-width"></input>}
        </>  
    )
}

export default FormularioLinea;