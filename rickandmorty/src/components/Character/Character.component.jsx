// Write your Character component here
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Character = ({ characterData }) => {
  return(
    <div style={{width: "30%"}}>
      <Card>
        <CardImg top width="100%" src={characterData.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{characterData.name}</CardTitle>
          <CardSubtitle>Species: {characterData.species}</CardSubtitle>
          <CardSubtitle>Status: {characterData.status}</CardSubtitle>
          <CardSubtitle>Location: {characterData.location.name}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
}

export default Character;