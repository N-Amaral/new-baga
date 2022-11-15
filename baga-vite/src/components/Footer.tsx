function Footer() {
  const currentYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <footer id="footer-End" className="">
      <div className="footer-container">
        &copy;
        <small>{`Baga ${currentYear()}`}</small>
      </div>
    </footer>
  );
}

export default Footer;
