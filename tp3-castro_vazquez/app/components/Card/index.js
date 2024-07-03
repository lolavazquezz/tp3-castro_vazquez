import 'bootstrap/dist/css/bootstrap.css';
import '../Card/Card.module.css';
const Card = ({rol, nombre, sobreNosotras}) => {
  return (
    <>
      <div class="card border-primary mb-3">
      <div class="card-header">{rol}</div>
      <div class="card-body text-primary">
        <h5 class="card-title">{nombre}</h5>
        <p class="card-text">{sobreNosotras}</p>
      </div>
      </div>
    </>
  )
  }
  export default Card;