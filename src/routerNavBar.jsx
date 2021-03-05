import { Link } from "react-router-dom";
import styles from "./routerNav.css";

function RouterNavBar() {
  return (
    <nav className="nav-header">
      <ul className="router-nav-holder">
        <li className="router-nav-link">
          <Link to="/" className="navText">
            Main page
          </Link>
        </li>
        <li className="router-nav-link">
          <Link className="navText" to="/about">
            About
          </Link>
        </li>
        <li className="router-nav-link">
          <Link className="navText" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default RouterNavBar;
