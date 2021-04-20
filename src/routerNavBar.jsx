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
          <Link className="navText" to="/squares">
            Squares
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
        <li className="router-nav-link">
          <Link className="navText" to="/maze">
            Mazes
          </Link>
        </li>
        <li className="router-nav-link">
          <Link className="navText" to="/animationtestpage">
            Animation Test Page
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default RouterNavBar;
