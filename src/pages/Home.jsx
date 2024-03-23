import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import About from "../components/About";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const [showEnterButton, setShowEnterButton] = useState(true);
  const [showLetter, setShowLetter] = useState(true);
  const [showNav, setShowNav] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [showHeadline, setShowHeadline] = useState(null);

  const handleEnterClick = () => {
    setShowEnterButton(false);
    setShowNav(true);
    setShowAbout(true);
    setShowFooter(true);
    setShowHeadline(true);

    // Fade out the background image
    const bgOverlay = document.querySelector(".background-overlay");

    if (bgOverlay) {
      bgOverlay.style.transition = "opacity 1s ease";
      bgOverlay.style.opacity = "0";
    }
  };

  return (
    <>
      <div className="dark-bg">
        <div className="background-overlay"></div>
      </div>
      {showEnterButton && (
        <div className="btn-wrapper">
          <button className="enter-btn" onClick={handleEnterClick}>
            Enter
          </button>
        </div>
      )}
      {showLetter && <div className="letter">M</div>}
      <Fade triggerOnce={true}>
        {showHeadline && (
          <h1 className="headline">
            Full Stack Developer | Musician | Creative
          </h1>
        )}
      </Fade>
      <Fade triggerOnce={true}>{showNav && <Nav />}</Fade>
      {showFooter && <footer className="footer">© Michael Tritsch 2023</footer>}

      {showAbout && <About />}
    </>
  );
};

export default Home;
