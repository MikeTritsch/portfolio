import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="nav-wrapper">
        <ul className="nav-list">
            <li className="nav-list-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-list-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-list-item">Music</li>
            <li className="nav-list-item">Graphic Design</li>
            <li className="nav-list-item">Resume</li>
            <li className="nav-list-item">Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
