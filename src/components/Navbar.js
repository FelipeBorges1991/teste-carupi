import house from "../Images/HouseIcon.png";

function Navbar() {
  return (
    <nav
      className="navbar navbar-light d-flex justify-content-center"
      style={{ backgroundColor: "#A35709" }}
    >
      <a className="navbar-brand" href="/">
        <img
          src={house}
          width="40"
          height="auto"
          className=""
          alt="House icon"
        ></img>
      </a>
    </nav>
  );
}

export default Navbar;
