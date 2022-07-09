import {Link as Li} from 'react-router-dom';
import Logo from '../../images/logo.png';
import {Link} from 'react-scroll';


const NavBar=()=>{
    return (
      <nav className="light-blue darken-4">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="home" className="brand-logo">
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
            </Link>
            <ul className="right">
              <li>
                <Link to="skills" spy={true} smooth={true}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="education" spy={true} smooth={true}>
                  Educations
                </Link>
              </li>
              <li>
                <Link to="projects">Projects</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default NavBar;