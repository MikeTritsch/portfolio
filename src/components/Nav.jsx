import React from "react";

const Nav = () => {
  return (
    <>
      <div className="nav-wrapper">
        <ul className="nav-list">
          <a>
            <li className="nav-list-item">About</li>
          </a>
          <a>
            <li className="nav-list-item">Projects</li>
          </a>
          <a>
            <li className="nav-list-item">Music</li>
          </a>
          <a>
            <li className="nav-list-item">Graphic Design</li>
          </a>
          <a>
            <li className="nav-list-item">Resume</li>
          </a>
          <a>
            <li className="nav-list-item">Contact</li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Nav;
