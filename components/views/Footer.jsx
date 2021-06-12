import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Footeritem from "./components/Infocard";
import Link from "next/link";
import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <Container
        style={{
          padding: "5px",
          backgroundColor: "black",
          color: "white",
          fontSize: 10,
        }}
      >
        <Row xs={1} md={4} className="g-4">
          <Col>
            <Footeritem
              Title="The Programming Help"
              Body="The Programming Assignment Help believes in helping students to write clean codes that are simple to read and easy to execute. We provide assignment help, homework help, online tutoring, and project help in programming to customers across the globe."
            />
          </Col>
          <Col>
            <Footeritem
              Title="Contact us"
              Body=" support@theprogrammingassignmenthelp.com"
            />
          </Col>
          <Col>
            <Footeritem Title="Important Links" Body="text" />
          </Col>
          <Col>
            <Footeritem
              Title="Reviews"
              Body="The Programming Assignment Help rated"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Footeritem
              Body="Disclaimer: The reference papers provided by
            TheProgrammingAssignmentHelp.com are to be considered as model
            papers only and are not to submitted as it is. These papers are
            intended to be used for research and reference purposes only."
            />
          </Col>
        </Row>

        <Row style={{ padding: "5px" }}>
          <Col>
            © The Programming Assignment Help 2021. All rights reserved.
          </Col>
          <Col style={{ display: "flex", justifyContent: "right" }}>
            <Button variant="warning">
              <a href="/">
                <AiOutlineArrowUp />
              </a>
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
