import React from 'react';

const GlitchyBackground = () => {
  const text = "FOR BALLERS BY BALLERS ";
  const repeatedText = Array(20).fill(text).join('');

  return (
    <>
      <div className="background-text-marquee background-text-marquee--primary" aria-hidden="true">
        <div className="marquee-track">
          <span>{repeatedText}</span>
          <span>{repeatedText}</span>
        </div>
      </div>
      <div className="background-text-marquee background-text-marquee--secondary" aria-hidden="true">
        <div className="marquee-track">
          <span>{repeatedText}</span>
          <span>{repeatedText}</span>
        </div>
      </div>
    </>
  );
};

export default GlitchyBackground; 