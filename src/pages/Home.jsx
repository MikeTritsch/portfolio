import React, { useState } from 'react';

const Home = () => {
  const [showEnterButton, setShowEnterButton] = useState(true);
  const [showLetter, setShowLetter] = useState(true);

  const handleEnterClick = () => {
    setShowEnterButton(false);
    const letterM = document.querySelector('.letter');
    if (letterM) {
      letterM.style.transition = 'opacity 2s ease';
      letterM.style.opacity = '0';
    }
    setTimeout(() => {
      setShowLetter(false);
    }, 2000);
  };

  return (
    <>
      <div className="dark-bg"></div>
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