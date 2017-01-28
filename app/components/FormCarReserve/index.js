/**
*
* FormCarReserve
*
*/

import React from 'react';
// import styled from 'styled-components';


function FormCarReserve(props) {
  return (
    <div className='formSingleCarReserve'>
      <div className='containerPlaceReserve'>
        <div className='placeRentReserve'>
          <h3 className='colorBlue'>Lugar de Renta</h3>
          <span className='textUbication'>{props.car.PickUpLocation_Code}</span>
          <span><i className='fa fa-calendar colorGreen'></i>{props.car.PickUp_Date}</span>
          <span><i className='fa fa-clock-o colorGreen'></i>{props.car.PickUp_Date}</span>
        </div>
        <div className='placeReturnReserve'>
          <h3 className='colorBlue'>Lugar de Retorno</h3>
          <span className='textUbication'>{props.car.ReturnLocation_Code}</span>
          <span><i className='fa fa-calendar colorGreen'></i>{props.car.Return_Date}</span>
          <span><i className='fa fa-clock-o colorGreen'></i>{props.car.Return_Date}</span>
        </div>
        <div className='selectedRateReserve backReserve'>
          <h3 className='colorBlue'>Tarifa Seleccionada</h3>
          <span className='textUbication'><i className='ico cri-seguro colorGreen'></i>Proteccion Basica</span>
            <ul className='listText'>
              <li>Seguro 1</li>
              <li>Seguro 2</li>
              <li>Seguro 3</li>
            </ul>
        </div>
      </div>
    </div>
  );
}


FormCarReserve.propTypes = {

};

export default FormCarReserve;
