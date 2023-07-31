import React, { useState, useRef } from 'react';
import './suggestions.css';

const Suggestions = () => {
  const [showPopup, setShowPopup] = useState(false);
  const textRef = useRef<HTMLTextAreaElement | null>(null);


  const handleButtonClick = () => {
    setShowPopup(true);
    if (textRef.current) {
      textRef.current.value = '';
    }
    setTimeout(() => {
      setShowPopup(false);
    }, 1500);
  };

  return (
    <div className="about-zinnia">
      <h1 className="title">Suggestions</h1>
      <textarea ref={textRef} className="content" placeholder="Enter your text here"></textarea>
      <button onClick={handleButtonClick} className="submit-button">
        Submit
      </button>
      {showPopup && (
        <div className="popup">
          <p>Thank you!</p>
        </div>
      )}
    </div>
  );
};

export default Suggestions;
