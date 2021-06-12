import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { FaLaptopCode } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { FaUserClock } from "react-icons/fa";
import Link from "next/link";

const Topbar = () => {
  return (
    <>
      <Card style={{ backgroundColor: "#e6e2d3" }}>
        <Card.Body variant="primary">
          <Container fluid="md">
            <Row>
              <Col xs={8} sm={7} md={7} lg={8}>
                <Card.Header>
                  <span style={{ fontSize: 9 }}>
                    <FaLaptopCode />
                    support@theprogrammingassignmenthelp.com
                  </span>
                </Card.Header>
              </Col>
              <Col xs={4} sm={5} md={5} lg={4}>
                <Card.Link href="/auth">
                  <Button variant="primary" style={{ fontSize: 10 }}>
                    <IoMdLogIn />
                    Login
                  </Button>
                </Card.Link>

                <Card.Link href="/">
                  <Button variant="warning" style={{ fontSize: 10 }}>
                    <FaUserClock />
                    Register
                  </Button>
                </Card.Link>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default Topbar;
