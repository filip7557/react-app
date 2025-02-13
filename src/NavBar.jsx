import "./NavBar.css";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <h3>Dog Shelter</h3>
        <div className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/Dogs">Dog list</Link>
          <Link to="/Add">Add dog</Link>
          <Link to="/AboutUs">About us</Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
