import React, { Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita'
import PropTypes from 'prop-types'

function App() {

  let  citasIniciales = JSON.parse( localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales =[]
  }

  const [citas, guardarCitas]= useState(citasIniciales);

useEffect(()=>{
  if(citasIniciales){
    localStorage.setItem('citas',JSON.stringify(citas));
  }else {
    localStorage.setItem('citas',JSON.stringify([]));
  }
}, [citas, citasIniciales])

  //funcion que toma las citas actuales y agrega la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ])
  }

  //funcion que elimina una cita  
  const eliminarCita = id =>{
    
    const nuevasCitas = citas.filter( citas => citas.id !== id)
    guardarCitas(nuevasCitas)
  }

const titulo = citas.length === 0 ? "No hay citas": "Citas"

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita = {crearCita}/>
          </div>
          <div className="one-half column">
              <h3>{titulo}</h3>
              {citas.map(cita => {
                return(

                  <Cita cita ={cita}
                    key ={cita.id}
                    eliminarCita = {eliminarCita}/>
                )
              })}
          </div>
        </div>
      </div>
    </Fragment>

  );
}


Formulario.propTypes = {
   crearCita: PropTypes.func.isRequired
}
export default App;
