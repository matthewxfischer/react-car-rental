/**
*
* CardCar
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Icon, Image, Grid, Card, Button, Checkbox } from 'semantic-ui-react'
import { browserHistory } from 'react-router'

function CardCar() {
  return (
    <Grid.Column className='contentCardCar'>
      <Card className='cardCar'>
        <Card.Content className='contentReserve'>
          <Image floated='right' alt='company' className='imgMarca' src='https://s3-us-west-2.amazonaws.com/projuv-data/creatuviaje/images/Dollar.png' />
          <Card.Header>
            Ford KA
          </Card.Header>
          <div className='contentCarPrice'>
            <div className='contentImgCar'>
              <img className='imgCar' alt='car' src='https://s3-us-west-2.amazonaws.com/projuv-data/creatuviaje/images/generic-car.png'/>
            </div>
            <div className='contentPrice'>
              <h2 className='colorBlue'>$389.56</h2>
              <h4>USD</h4>
              <Checkbox className='checkboxAvail' label='Cotizar' />
            </div>
          </div>
          <div className="contentIcon">
            <Icon name='users' className="colorGreen" />
            <span className="colorGreen letterCarFeatures">5</span>
            <Icon name='travel' className="colorGreen" />
            <span className="colorGreen letterCarFeatures">5</span>
            <Icon name='cloud' className="colorGreen" />
            <span className="colorGreen letterCarFeatures">5</span>
            <Icon name='car' className="colorGreen" />
            <span className="colorGreen letterCarFeatures">5</span>
            <Icon name='bookmark' className="colorGreen" />
            <span className="colorGreen letterCarFeatures">5</span>
          </div>
        </Card.Content>
        <Button className="buttonCotizar secundary" onClick ={() => browserHistory.push('/quotation')} ><span>Cotizar</span></Button>
      </Card>
    </Grid.Column>
  );
}

CardCar.propTypes = {

};

export default CardCar;
