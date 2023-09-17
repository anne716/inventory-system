import Logo from "../assets/logo.png";

function Navbar() {
  const navbarStyle = {
    backgroundColor: "#45B6FE", // Define the background color here
  };

  return (
    <nav className="navbar bg-body-tertiary" style={navbarStyle}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={Logo}
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Inventory System
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
