function Footer() {
  return (
    <footer
      className="container-fluid mt-5 navbar navbar-static-bottom navbar-light justify-content-center"
      style={{ backgroundColor: "#F0E3CA" }}
    >
      <div className="d-flex align-content-center align-items-center text-center">
        <p>
          This website was made using the&nbsp;
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://rawg.io/apidocs"
          >
            RAWG API
          </a>
          , as part of a company job application
        </p>
      </div>
    </footer>
  );
}

export default Footer;
