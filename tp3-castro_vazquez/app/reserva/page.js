"use client"
import Titulo from '../components/Titulo';
import Subtitulo from '../components/Subtitulo';
import Cita from '../components/Cita';
import FormularioCrear from '../components/FormularioCrear';
import '../reserva/Reserva.module.css';
import { useState } from 'react';

export default function Reserva() {
  const [citas, setCitas] = useState([]);

  return (
    <>
      <body class="html body">
        <Titulo texto="ADMINISTRADOR DE PACIENTES"></Titulo>
        <div class="container">
          <div class="row">
            <div class="one-half column">
              <Subtitulo texto="CREAR MI CITA"></Subtitulo>
              <FormularioCrear citas={citas} setCitas={setCitas}></FormularioCrear>
            </div>
            <div class="one-half column">
              <Subtitulo texto="ADMINISTRA TUS CITAS"></Subtitulo>
              <div class="lista-citas">
                  {citas.map(c => <div class="cita"><Cita citas={citas} setCitas={setCitas} nombreMascota={c.mascota} nombreDuenio={c.duenio} fecha={c.fecha} hora={c.hora} sintomas={c.sintomas} id={c.id}></Cita></div>)}
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
