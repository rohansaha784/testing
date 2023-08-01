import React from 'react';
import './AboutZinnia.css';

const AboutZinnia = () => {
  return (
    <div className="about-zinnia">
      <div className="image-container">
        <img decoding="async" src="https://zinnia.com/wp-content/uploads/2023/03/Zinnia_logo_animation_081722-2-1-1.gif" alt="Zinnia logo animation 081722 2 1 1" className="wp-image-1485" width="1200" data-xs-align="center" data-md-align="right" data-lg-align="right" data-xl-align="right" data-hd-align="right" />
        <div className="text-container">
        <h2 className="heading">
          <span className="bold">ZINNIA IS A NEW TECH COMPANY, BUT NOT NEW TO INSURANCE.</span>
        </h2>
        <p className="body">
          For almost twenty years, we have brought together insurance experts with entrepreneurs from the fields of technology and data science to deliver new products for the life and annuities industry. We have invested in our technology platforms and capabilities and innovated to deliver full-stack digital services. Zinnia will build on these innovations – creating brand-new products and value-add data capabilities.
          <br />
          <br />
          We’re focused on transforming the life and annuity industry from end to end so that the experience is exceptional for everyone: consumers, advisors, insurers, and reinsurers.
        </p>
      </div>
      </div>
    </div>
  );
};

export default AboutZinnia;
