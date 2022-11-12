import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";

function NavbarLinks() {
  const content: any = [];
  const linkText = ["Link1", "Link2", "Link3", "Link4"];

  linkText.forEach((item, i) => {
    content.push(
      <Nav.Link key={i} href={`#${item}`}>
        {item}
      </Nav.Link>
    );
  });

  return content;
}

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="baga-logo" src="./src/assets/logos/bLogosWhiteNoBg.png" width={50} height={50} className="d-inline-block align-top" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavbarLinks />
            </Nav>
            <Nav>
              <Button variant="btn btn-warning" onClick={handleOpen}>
                Login
              </Button>
              <Button variant="btn btn-success">Register</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
