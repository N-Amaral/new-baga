import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignUpForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formLoginEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">We will never share your email with anyone else</Form.Text>
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

function SignUpModal(props: { showStat: boolean; handleOpen: Function; handleClose: Function }) {
  return (
    <Modal show={props.showStat} onHide={() => props.handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SignUpForm />
      </Modal.Body>
    </Modal>
  );
}

export default SignUpModal;
