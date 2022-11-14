import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";

function LoginForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formLoginEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLoginPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Text className="text-muted">Never share your credentials online.</Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

function LoginModal(props: { showStat: boolean; handleOpen: Function; handleClose: Function }) {
  return (
    <Modal show={props.showStat} onHide={() => props.handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LoginForm />
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;
