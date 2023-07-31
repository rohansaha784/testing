import React from 'react';
import './AboutZinnia.css';

const AboutZinnia = () => {
  return (
    <div className="about-zinnia">
      <div className="image-container">
        <img src="https://zinnia.com/wp-content/uploads/2023/03/abouthero.svg" alt="About Zinnia" />
      </div>
      <div className="text-container">
        <h2 className="heading">
          <span className="bold">Zinnia is a New Tech Company, But Not New to Insurance.</span>
        </h2>
        <p className="body">
          For almost twenty years, we have brought together insurance experts with entrepreneurs from the fields of technology and data science to deliver new products for the life and annuities industry. We have invested in our technology platforms and capabilities and innovated to deliver full-stack digital services. Zinnia will build on these innovations – creating brand-new products and value-add data capabilities.
          <br />
          <br />
          We’re focused on transforming the life and annuity industry from end to end so that the experience is exceptional for everyone: consumers, advisors, insurers, and reinsurers.
        </p>
      </div>
    </div>
  );
};

export default AboutZinnia;
