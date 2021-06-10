import React from "react";
import {
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  NavDropdown,
  Container,
} from "react-bootstrap";

const Navigation = () => {
  // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#">Assingment Dev</Navbar.Brand>
          <Navbar.Toggle />
        </Container>
        <Container>
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">Contact us</Nav.Link>
              <NavDropdown title="Link">
                <NavDropdown.Item href="/">Action</NavDropdown.Item>
                <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav className="ml-auto">
              <Nav.Link href="/auth">
                <Button variant="primary">Login</Button>
              </Nav.Link>
              <Nav.Link eventKey={2} href="/">
                <Button variant="warning">Sign Up</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
