import './about.css';
import React, { useState, useRef } from 'react';

const about = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const blocks = [
    {
      title: "Jake Fifer",
      content: "I absolutely love this website! It's so cool and fun to use. The interface is intuitive and the features are amazing. Highly recommended!",
    },
    {
      title: "Ritisha De",
      content: "This website is simply fantastic! It's incredibly interesting and engaging. I can spend hours exploring all the wonderful content. A must-visit for everyone!",
    },
    {
      title: "Emily Gul",
      content: "I can't get enough of this website! It's so much fun and has such a creative design. The interactive elements make the user experience truly enjoyable. I'm hooked!",
    },
    {
      title: "Darshan Savaliya",
      content: "This website is mind-blowing! The features are revolutionary and the content is top-notch. It's a refreshing and unique experience that keeps me coming back for more.",
    },
    {
      title: "Sumedh Salvi",
      content: "I'm absolutely amazed by this website! It's a perfect blend of creativity and functionality. The attention to detail is outstanding. I can't recommend it enough!",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? blocks.length - 3 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === blocks.length - 3 ? 0 : prevIndex + 1));
  };

  return (
    <div className="about-page">
      <h2 className="title">About the Developer</h2>
      <div className="content">
        <p className="body">Rohan Saha is an adorable and talented developer, born and raised in the magical world of Zinnia. With a sprinkle of creativity and a dash of coding magic, Rohan creates delightful experiences that bring joy to users all around. When not crafting pixel-perfect UIs, you can find Rohan exploring new coding adventures and cuddling with fluffy kittens.</p>
        <div className="colorful-box">
          <p className="body">Join Rohan on this whimsical coding journey and let the magic of technology unfold!</p>
        </div>
      </div>
      <div className="block-container">
        {blocks.slice(activeIndex, activeIndex + 3).map((block, index) => (
          <div key={index} className="block">
            <h3 className="block-title">{block.title}</h3>
            <p className="block-content">{block.content}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button className="prev-button" onClick={handlePrev}>Previous</button>
        <button className="next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default about;
