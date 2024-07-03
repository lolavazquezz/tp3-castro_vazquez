//import Image from "next/image";
//import styles from "./page.module.css";
import Titulo from "../components/Titulo"
import Card from "../components/Card"
export default function QuienesSomos() {
  return (
    <>
    <Titulo texto="Nosotras"></Titulo>
    <div class="d-flex justify-content-around">
      <Card rol="Estudiante de Informática ORT" nombre="Ariana Castro" sobreNosotras="Tengo 17 años, vivo en CABA y me gusta programar."></Card>
      <Card rol="Estudiante de Informática ORT" nombre="Lola Vazquez" sobreNosotras="Tengo 17 años, vivo en CABA y me gusta programar."></Card>
    </div>
    </>
  );
}
