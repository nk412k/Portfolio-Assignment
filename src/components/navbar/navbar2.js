import { Link as Li } from "react-router-dom";
import Logo from "../../images/logo.png";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="light-blue darken-4">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="home">
            <Li to="/" className="brand-logo">
              <img
                src={Logo}
                alt="Logo"
                style={{
                  height: "45px",
                  verticalAlign: "sub",
                  padding: "0 10px",
                }}
              />
              Lovely Professional University
            </Li>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
