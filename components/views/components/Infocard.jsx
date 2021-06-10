import React from "react";
import { Card } from "react-bootstrap";

const Infocard = (props) => {
  return (
    <>
      <Card
        style={{ padding: "5px", backgroundColor: "black", color: "white" }}
      >
        <Card.Header>{props.Header}</Card.Header>
        <Card.Body>
          <Card.Title variant="warning"> {props.Title} </Card.Title>
          <Card.Text>{props.Body}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Infocard;
