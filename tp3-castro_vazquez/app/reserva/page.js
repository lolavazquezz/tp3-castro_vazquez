"use client"
import Titulo from '../components/Titulo';
import Subtitulo from '../components/Subtitulo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cita from '../components/Cita';
import FormularioCrear from '../components/FormularioCrear';
import styles from '../reserva/Reserva.module.css';
import { useEffect, useState } from 'react';

export default function Reserva() {
  const [citas, setCitas] = useState([]);
  useEffect(() => {
    let citasGuardadas = localStorage.getItem('citas');
    if (citasGuardadas) {
      setCitas(JSON.parse(citasGuardadas));
    }
  }, []);
  useEffect(() => {
    if (citas.length) {
      localStorage.setItem('citas', JSON.stringify(citas));
    }
  }, [citas]);
  return (
      <>
      <Titulo texto="ADMINISTRADOR DE PACIENTES"></Titulo>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <Subtitulo texto="CREAR MI CITA"></Subtitulo>
            <FormularioCrear citas={citas} setCitas={setCitas}></FormularioCrear>
          </div>
          <div class="one-half column">
            <Subtitulo texto="ADMINISTRA TUS CITAS"></Subtitulo>
              <div className={styles.listacitas}>
                  {citas.map(c => <div class={styles.cita}><Cita citas={citas} setCitas={setCitas} nombreMascota={c.mascota} nombreDuenio={c.duenio} fecha={c.fecha} hora={c.hora} sintomas={c.sintomas} id={c.id}></Cita></div>)}
            </div> 
          </div>
        </div>
      </div>
      </>
)
}
