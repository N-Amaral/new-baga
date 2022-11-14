import { Container } from "react-bootstrap";

const Footer = () => {
  const currentYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <footer id="footer-End" className="">
      <Container className="footer-container">
        &copy;
        <small>{`Baga ${currentYear()}`}</small>
      </Container>
    </footer>
  );
};

export default Footer;
