import React, { useState } from 'react';

const Home = () => {
  const [showEnterButton, setShowEnterButton] = useState(true);
  const [showLetter, setShowLetter] = useState(true);

  const handleEnterClick = () => {
    setShowEnterButton(false);

    // Fade out the background image
    const bgOverlay = document.querySelector('.background-overlay');
    if (bgOverlay) {
      bgOverlay.style.transition = 'opacity 2s ease';
      bgOverlay.style.opacity = '0';
    }
  };

  return (
    <>
      <div className="dark-bg">
        {/* Background overlay to fade out */}
        <div className="background-overlay"></div>
      </div>
      {showEnterButton && (
        <div className="btn-wrapper">
          <button className="enter-btn" onClick={handleEnterClick}>Enter</button>
        </div>
      )}
      {showLetter && <div className="letter">M</div>}
    </>
  );
};

export default Home;