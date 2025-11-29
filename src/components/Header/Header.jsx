import "./Header.css";
import { NavLink } from "react-router-dom";
import Bag from "../../images/bag.png";

function Header() {
  return (
    <header>
      <nav className="navigation">
        <img
          className="logo"
          src="https://gmcentras.lt/img/logo.png"
          alt="logo"
        />

        <ul>
          <li>
            <NavLink to="/" className="nav-link">
              Pagrindinis
            </NavLink>
          </li>

          <li>
            <NavLink to="/licencija" className="nav-link">
              Licencija
            </NavLink>
          </li>

          <li>
            <NavLink to="/gydomasismasazas" className="nav-link">
              Gydomasis masažas
            </NavLink>
          </li>

          <li>
            <NavLink to="/straipsniai" className="nav-link">
              Straipsniai
            </NavLink>
          </li>

          <li>
            <NavLink to="/kainorastis" className="nav-link">
              Kainoraštis
            </NavLink>
          </li>

          <li>
            <NavLink to="/duk" className="nav-link">
              D.U.K
            </NavLink>
          </li>

          <li>
            <NavLink to="/kontaktai" className="nav-link">
              Kontaktai
            </NavLink>
          </li>

          <li>
            <img className="bag-img" src={Bag} alt="krepšelis" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
