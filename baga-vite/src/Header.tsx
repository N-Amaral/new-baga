import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";

import LoginModal from "./LoginModal";
import SignUpModal from "./SignupModal";

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
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setshowSignUp] = useState(false);

  const openLoginModal = () => {
    setShowLogin(true);
  };
  const closeLoginModal = () => {
    setShowLogin(false);
  };

  const openSignUpModal = () => {
    setshowSignUp(true);
  };
  const closeSignUpModal = () => {
    setshowSignUp(false);
  };

  return (
    <>
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
                <Button className={"m-1"} variant="btn btn-primary" id="loginBtn" onClick={openLoginModal}>
                  Login
                </Button>
                <Button className={"m-1"} variant="btn btn-success" onClick={openSignUpModal}>
                  Register
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <LoginModal showStat={showLogin} handleOpen={openLoginModal} handleClose={closeLoginModal} />
      <SignUpModal showStat={showSignUp} handleOpen={openSignUpModal} handleClose={closeSignUpModal} />
    </>
  );
}

export default Header;
