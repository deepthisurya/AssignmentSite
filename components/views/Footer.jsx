import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Footeritem from "./components/Infocard";
import Link from "next/link";
import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <Container
        style={{ padding: "5px", backgroundColor: "black", color: "white" }}
      >
        <Row style={{ color: "black" }} xs={1} md={4} className="g-4">
          <Col style={{ padding: "0px" }}>
            <Footeritem
              Header="The Programming Help"
              Body="The Programming Assignment Help believes in helping students to write clean codes that are simple to read and easy to execute. We provide assignment help, homework help, online tutoring, and project help in programming to customers across the globe."
            />
          </Col>
          <Col style={{ padding: "0px" }}>
            <Footeritem
              Title="Contact us"
              Body=" support@theprogrammingassignmenthelp.com"
            />
          </Col>
          <Col style={{ padding: "0px" }}>
            <Footeritem
              Title="Important Links"
              Body={
                <ul>
                  <li>About us</li>
                  <li>Our Journey</li>
                  <li>Terms and Conditions</li>
                  <li>Revision and Refunds Policy</li>
                  <li>Privacy Policy</li>
                  <li>Sitemap</li>
                  <li> Connect With Us</li>
                </ul>
              }
            />
          </Col>
          <Col style={{ padding: "0px" }}>
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
