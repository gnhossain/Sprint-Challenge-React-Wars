import React from "react";
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CharacterCard = (props) => {
    console.log(props);
  return (
      <Card>
        {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>Name:{props.name}</CardTitle>
          <CardSubtitle>hair_color:{props.hair_color}</CardSubtitle>
          <CardText>gender:{props.gender}</CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
  );
};

export default CharacterCard;