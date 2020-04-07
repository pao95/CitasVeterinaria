import React, { Fragment, useState } from 'react';
import uuid from  'uuid/v4';
const Formulario = ({crearCita}) => {

  //Crear state de citas

  const [cita, actualizarCita] = useState({
    nombreMascota: '',
    nombreDueño: '',
    fechaAlta: '',
    horaAlta: '',
    descripcion: '',
  });


  //crear state de errores

  const [error, actualizarError] = useState(false)
  //extraer valores
  const { nombreMascota, nombreDueño, fechaAlta, horaAlta, descripcion } = cita
  //actualizar state
  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }

  //agregarCita

  const submitCita = (e) => {
    e.preventDefault();


    //validar

    if (nombreMascota.trim() === "" || nombreDueño.trim() === "" ||
      fechaAlta.trim() === "" || horaAlta.trim() === "" || descripcion.trim() === "") {
      actualizarError(true)
      console.log("hay un error");
      return;
    }

    //eliminar mensaje de error
    actualizarError(false)

    //asignar id

    cita.id = uuid();
    //crear cita
    crearCita(cita)
    //reinicar form


    actualizarCita({
      nombreMascota: '',
      nombreDueño: '',
      fechaAlta: '',
      horaAlta: '',
      descripcion: '',
    })
  }



  return (
    <Fragment>
      <h3>Crear cita</h3>
      {error ? <div class="alert alert-danger" role="alert">
        Debes completar todos los campos
</div> :
        null}
      <form onSubmit={submitCita}>
        <label>Nombre mascota</label>
        <input type="text"
          name="nombreMascota"
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={
            actualizarState
          }
        value= {nombreMascota}
        ></input>
        <label>Nombre del dueño</label>
        <input type="text"
          name="nombreDueño"
          className="u-full-width"
          placeholder="Nombre dueño"
          onChange={
            actualizarState
          }
          value={nombreDueño}
        ></input>
        <label>Fecha</label>
        <input type="date"
          name="fechaAlta"
          className="u-full-width"
          onChange={
            actualizarState
          }
          value={fechaAlta}
        ></input>
        <label>Hora</label>
        <input type="time"
          name="horaAlta"
          className="u-full-width"
          onChange={
            actualizarState
          }
          value={horaAlta}
        ></input>
        <label>Descripcion cita</label>
        <textarea className="u-full-width"
          placeholder="Descripcion"
          name="descripcion"
          onChange={
            actualizarState
          }
          value={descripcion}
        >

        </textarea>
        <button
          type="submit"
          className="u-full-width button-primary"
        > Agregar Cita</button>
      </form>

    </Fragment>

  );
}

export default Formulario;