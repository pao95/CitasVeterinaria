import React from 'react';
import PropTypes from 'prop-types'

const Cita = ({cita, eliminarCita}) => {
    return ( 
        <div className ="cita m-5">

    <p>Mascota: <span>{cita.nombreMascota}</span></p>
    <p>Dueño: <span>{cita.nombreDueño}</span></p>
    <p>Mascota: <span>{cita.fechaAlta}</span></p>
    <p>Mascota: <span>{cita.horaAlta}</span></p>
    <p>Mascota: <span>{cita.descripcion}</span></p>
    <button className="button eliminar  u-full-width" onClick={ () => eliminarCita(cita.id)}>
        Eliminar 
    </button>
    
        </div>
        
     );
}
 

Cita.prototype= {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
export default Cita;